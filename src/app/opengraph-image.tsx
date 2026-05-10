import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "radial-gradient(circle at top, rgba(34,211,238,0.25), transparent 30%), linear-gradient(135deg, #020617 0%, #0f172a 45%, #061223 100%)",
          color: "white",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            borderRadius: "36px",
            border: "1px solid rgba(148, 163, 184, 0.18)",
            background: "rgba(15, 23, 42, 0.58)",
            padding: "52px",
          }}
        >
          <div style={{ fontSize: 24, letterSpacing: 8, color: "#67e8f9" }}>
            VOLTVERGE WHOLESALE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, maxWidth: 900 }}>
              Stop Losing Customers to Shops Selling More Trending Gadgets
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.4, color: "#cbd5e1", maxWidth: 820 }}>
              Wholesale smart gadgets, better margins, warranty support, and
              retailer-first supply for electronics shops in Nepal.
            </div>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Trending Products", "Retailer Pricing", "WhatsApp Leads"].map((label) => (
              <div
                key={label}
                style={{
                  borderRadius: 9999,
                  border: "1px solid rgba(103,232,249,0.3)",
                  padding: "16px 24px",
                  color: "#cffafe",
                  fontSize: 22,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
