import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-headline font-sans tracking-brand-snug mb-6">
        Terms of Service
      </h1>

      <div className="space-y-8 text-body text-brand-ink/70">
        <p>
          By using this Website, you are agreeing to these Terms of Use. If you
          do not agree to these Terms of Use, then you are not allowed to use
          this Website and should immediately terminate such usage.
        </p>
        <p>
          The entity within the Alphabyte Network that is providing this Website
          is referred to in these Terms of Use as &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;. Although parts of these Terms
          of Use may reference other entities in the Alphabyte Network, these
          Terms of Use are only between you and us and not with any of those
          other entities.
        </p>

        {/* Use of Content; Restrictions; Privacy Statement */}
        <section className="space-y-4">
          <h2 className="text-headline font-sans tracking-brand-snug text-brand-ink">
            Use of Content; Restrictions; Privacy Statement
          </h2>
          <p>
            Unless otherwise indicated in the relevant content, and on the
            condition that you comply with all of your obligations under these
            Terms of Use, you are authorized to view, copy, print, and
            distribute (but not modify) the content on this Website; provided
            that (i) such use is for informational, non-commercial purposes
            only, and (ii) any copy of the content that you make must include
            the copyright notice or other attribution associated with the
            content.
          </p>
          <p>
            You are not authorized to copy or use any software, proprietary
            processes, or technology embodied or described in this Website.
          </p>
          <p>
            You will comply with all applicable laws in accessing and using this
            Website.
          </p>
          <p>
            Please review the{" "}
            <Link
              href="/privacy/"
              className="text-alphabyte-blue hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for more information regarding the ways in which your personal
            information is collected in connection with your use of this Website,
            the purposes for which your personal information is used, and how it
            is shared.
          </p>
        </section>

        {/* Intellectual Property Rights */}
        <section className="space-y-4">
          <h2 className="text-headline font-sans tracking-brand-snug text-brand-ink">
            Intellectual Property Rights; No use of Alphabyte names or logos
          </h2>
          <p>
            Unless otherwise indicated, the content on this Website is provided
            by us or another entity within the Alphabyte Network.
          </p>
          <p>
            This Website and its contents are protected by copyright, trademark,
            and other laws of the United States, Canada and/or foreign
            countries. We and our licensors reserve all rights not expressly
            granted in these Terms of Use.
          </p>
          <p>
            &ldquo;Alphabyte&rdquo;, &ldquo;Alphabyte Solutions&rdquo;,
            &ldquo;Alphabyte Canada&rdquo;, &amp; &ldquo;Alphabyte USA&rdquo;,
            the Alphabyte logo, and local language variants of the foregoing
            trademarks, and certain product names that appear on this Website
            (collectively, the &ldquo;Alphabyte Marks&rdquo;), are trademarks
            or registered trademarks of entities within the Alphabyte Network.
            Except as expressly provided in these Terms of Use or as expressly
            authorized in writing by the relevant trademark owner, you shall not
            use any Alphabyte Marks either alone or in combination with other
            words or design elements, including in any press release,
            advertisement, or other promotional or marketing material or media,
            whether in written, oral, electronic, visual or any other form.
          </p>
          <p>
            References to other parties&rsquo; trademarks on this Website are
            for identification purposes only and do not indicate that such
            parties have approved this Website or any of its contents. These
            Terms of Use do not grant you any right to use the trademarks of
            other parties.
          </p>
        </section>

        {/* Disclaimers and Limitations of Liability */}
        <section className="space-y-4">
          <h2 className="text-headline font-sans tracking-brand-snug text-brand-ink">
            Disclaimers and Limitations of Liability
          </h2>
          <div className="space-y-4 text-body-sm uppercase">
            <p>
              This Website (including without limitation any content or other
              part thereof) contains general information only, and we are not, by
              means of this Website, rendering professional advice or services.
              Before making any decision or taking any action that might affect
              your finances or business, you should consult a qualified
              professional advisor.
            </p>
            <p>
              This Website is provided as is, and we make no express or implied
              representations or warranties regarding it. Without limiting the
              foregoing, we do not warrant that this Website will be secure,
              error-free, free from viruses or malicious code, or will meet any
              particular criteria of performance or quality. We expressly
              disclaim all implied warranties, including, without limitation,
              warranties of merchantability, title, fitness for a particular
              purpose, non-infringement, compatibility, security, and accuracy.
            </p>
            <p>
              Your use of this Website is at your own risk and you assume full
              responsibility and risk of loss resulting from your usage,
              including, without limitation, with respect to loss of service or
              data. We will not be liable for any direct, indirect, special,
              incidental, consequential, or punitive damages or any other
              damages whatsoever, whether in an action of contract, statute, tort
              (including, without limitation, negligence), or otherwise, relating
              to or arising out of the use of this Website, even if we knew, or
              should have known, of the possibility of such damages.
            </p>
            <p>
              Certain links on this Website may lead to websites, resources or
              tools maintained by third parties over whom we have no control,
              including, without limitation, those maintained by other entities
              within the Alphabyte Network or individual personnel of such
              entities. Without limiting any of the foregoing, we make no express
              or implied representations or warranties whatsoever regarding such
              websites, resources and tools, and links to any such websites,
              resources and tools should not be construed as an endorsement of
              them or their content by us.
            </p>
            <p>
              The above disclaimers and limitations of liability shall be
              applicable not only to us but also to each other entity within the
              Alphabyte Network and to our and their respective personnel.
            </p>
            <p>
              The above disclaimers and limitations of liability are applicable
              to the fullest extent permitted by law, whether in contract,
              statute, tort (including, without limitation, negligence) or
              otherwise.
            </p>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="space-y-4">
          <h2 className="text-headline font-sans tracking-brand-snug text-brand-ink">
            Additional Terms
          </h2>
          <p>
            If any portion of these Terms of Use is invalid or unenforceable in
            any jurisdiction, then (i) in that jurisdiction it shall be
            re-construed to the maximum effect permitted by law in order to
            effect its intent as nearly as possible, and the remainder of these
            Terms of Use shall remain in full force and effect, and (ii) in
            every other jurisdiction, all of these Terms of Use shall remain in
            full force and effect.
          </p>
          <p>
            We may revise these Terms of Use at any time in our sole discretion
            by posting such revised Terms of Use at the Terms of Use link (i.e.,
            this webpage that you are currently viewing) or elsewhere in this
            Website. Such revisions shall be effective as to you upon posting,
            unless explicitly stated by us. It is your responsibility to be aware
            of any such revised Terms of Use by checking this webpage. Your
            continued use of this Website following changes to these Terms of Use
            constitutes your agreement to the revised Terms of Use.
          </p>
        </section>
      </div>
    </main>
  );
}
