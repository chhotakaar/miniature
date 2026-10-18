
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const secret = process.env.GOOGLE_SCRIPT_SECRET;

    if (!scriptUrl || !secret) {
      console.error("Google Sheets environment variables are missing.");

      return NextResponse.json(
        { success: false, message: "Server configuration error." },
        { status: 500 }
      );
    }

    const data = await request.json();

    // Basic validation
    if (
      !data.customerName ||
      !data.customerPhone ||
      !data.modelType ||
      !Number.isFinite(Number(data.length)) ||
      !Number.isFinite(Number(data.width)) ||
      !Number.isFinite(Number(data.estimatedPrice))
    ) {
      return NextResponse.json(
        { success: false, message: "Please provide valid customer and model details." },
        { status: 400 }
      );
    }

    const payload = {
      token: secret,
      customerName: String(data.customerName).trim().slice(0, 120),
      phone: String(data.customerPhone).trim().slice(0, 30),
      email: String(data.customerEmail || "").trim().slice(0, 200),
      modelType: String(data.modelType).slice(0, 100),
      length: Number(data.length),
      width: Number(data.width),
      detailLevel: String(data.detail || ""),
      has3DFile: String(data.has3DFile || ""),
      lighting: Boolean(data.led),
      landscaping: Boolean(data.landscape),
      acrylicBox: Boolean(data.acrylic),
      painting: Boolean(data.painting),
      estimatedPrice: Number(data.estimatedPrice),
      notes: String(data.notes || "").trim().slice(0, 2000),
    };

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      redirect: "follow",
    });

    if (!response.ok) {
      console.error("Google Apps Script returned HTTP", response.status);

      return NextResponse.json(
        { success: false, message: "Could not contact Google Sheets." },
        { status: 502 }
      );
    }

    const result = await response.json();

    if (!result.success) {
      console.error("Google Sheets rejected the lead:", result.message);

      return NextResponse.json(
        { success: false, message: "Google Sheets could not save this lead." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead submission failed:", error);

    return NextResponse.json(
      { success: false, message: "Unable to submit your quote request." },
      { status: 500 }
    );
  }
}
