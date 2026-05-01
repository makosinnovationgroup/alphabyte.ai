interface Env {
  SENDGRID_API_KEY: string;
}

interface EventContext {
  request: Request;
  env: Env;
}

interface FormBody {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  interest: string;
  situation?: string;
}

export async function onRequestPost(context: EventContext): Promise<Response> {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const body = (await context.request.json()) as FormBody;

    const { firstName, lastName, workEmail, company, jobTitle, interest, situation } = body;

    if (!firstName || !lastName || !workEmail || !company || !interest) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    const situationRow = situation
      ? `<tr>
              <td style="padding:12px 0;vertical-align:top;width:140px;">
                <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#00abf0;">Situation</span>
              </td>
              <td style="padding:12px 0;font-size:15px;color:#171717;line-height:1.5;">
                ${situation}
              </td>
            </tr>`
      : "";

    const emailHtml = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background-color:#fafafa;font-family:Arial,Helvetica,sans-serif;color:#171717;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#fafafa;">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">

      <!-- Header -->
      <tr>
        <td style="background-color:#171717;padding:28px 32px;">
          <table role="presentation" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <img src="https://alphabyte.ai/logos/alphabyte-logo-white.svg" alt="Alphabyte" width="160" style="display:block;height:auto;" />
              </td>
              <td style="padding-left:8px;vertical-align:middle;">
                <span style="color:#737373;font-size:20px;">&middot;</span>
                <span style="color:#00abf0;font-size:20px;font-weight:500;">AI</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Title -->
      <tr>
        <td style="padding:32px 32px 8px 32px;">
          <h1 style="margin:0;font-size:22px;font-weight:700;color:#171717;letter-spacing:-0.01em;">New Discovery Call Request</h1>
        </td>
      </tr>

      <!-- Subtitle -->
      <tr>
        <td style="padding:0 32px 24px 32px;">
          <p style="margin:0;font-size:14px;color:#737373;">Submitted from alphabyte.ai</p>
        </td>
      </tr>

      <!-- Divider -->
      <tr><td style="padding:0 32px;"><div style="border-top:1px solid #e5e5e5;"></div></td></tr>

      <!-- Fields -->
      <tr>
        <td style="padding:24px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;vertical-align:top;width:140px;">
                <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#00abf0;">Name</span>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;font-size:15px;color:#171717;">
                ${firstName} ${lastName}
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;vertical-align:top;width:140px;">
                <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#00abf0;">Email</span>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;font-size:15px;">
                <a href="mailto:${workEmail}" style="color:#00abf0;text-decoration:none;">${workEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;vertical-align:top;width:140px;">
                <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#00abf0;">Company</span>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;font-size:15px;color:#171717;">
                ${company}
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;vertical-align:top;width:140px;">
                <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#00abf0;">Job Title</span>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;font-size:15px;color:#171717;">
                ${jobTitle || "\u2014"}
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;vertical-align:top;width:140px;">
                <span style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#00abf0;">Interested In</span>
              </td>
              <td style="padding:12px 0;border-bottom:1px solid #f5f5f5;">
                <span style="display:inline-block;background-color:#171717;color:#ffffff;font-size:13px;font-weight:500;padding:4px 12px;border-radius:4px;">${interest}</span>
              </td>
            </tr>
            ${situationRow}
          </table>
        </td>
      </tr>

      <!-- CTA -->
      <tr>
        <td style="padding:8px 32px 32px 32px;">
          <a href="mailto:${workEmail}" style="display:inline-block;background-color:#171717;color:#ffffff;font-size:14px;font-weight:500;text-decoration:none;padding:12px 24px;border-radius:4px;">Reply to ${firstName} &rarr;</a>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color:#fafafa;border-top:1px solid #e5e5e5;padding:20px 32px;">
          <p style="margin:0;font-size:12px;color:#737373;">
            Alphabyte &middot; <span style="color:#00abf0;">AI</span>&nbsp;&nbsp;|&nbsp;&nbsp;155 Winges Road, Unit 1, Vaughan, Ontario&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://alphabyte.ai" style="color:#00abf0;text-decoration:none;">alphabyte.ai</a>
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;

    const emailText = `New Discovery Call Request\n\nName: ${firstName} ${lastName}\nEmail: ${workEmail}\nCompany: ${company}\nJob Title: ${jobTitle || "—"}\nInterested In: ${interest}\nSituation: ${situation || "—"}`;

    const sgResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "contact@alphabyte.ai" }],
            subject: `Discovery Call Request — ${firstName} ${lastName}, ${company}`,
          },
        ],
        from: {
          email: "contact@alphabyte.ai",
          name: "Alphabyte Website",
        },
        reply_to: {
          email: workEmail,
          name: `${firstName} ${lastName}`,
        },
        content: [
          { type: "text/plain", value: emailText },
          { type: "text/html", value: emailHtml },
        ],
      }),
    });

    if (!sgResponse.ok) {
      const errorText = await sgResponse.text();
      console.error("SendGrid error:", sgResponse.status, errorText);
      return new Response(
        JSON.stringify({ error: "Failed to send email" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  } catch (err) {
    console.error("Discovery call function error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } },
    );
  }
};

export async function onRequestOptions(): Promise<Response> {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
