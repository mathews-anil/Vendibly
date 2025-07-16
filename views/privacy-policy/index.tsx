import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <section className="relative py-10 sm:py-20 2xl:py-36 !pb-0 lg:pb-1.75">
      <div className="absolute left-0 top-0 w-full h-fit isolate z-[-1] max-lg:hidden">
        <Image
          src={"/imgs/Hero.png"}
          alt={"top-hero-bg"}
          width={1920}
          height={900}
          className={"img"}
          quality={100}
          priority
        />
      </div>
      <div className="wrapper mt-[88px] sm:mt-[120px] lg:mt-[200px] xl:mt-[300px]">
        <h1 className="title mb-10 sm:mb-16 md:mb-[91px]">Privacy Policy</h1>
        <div className="doc-text mb-10 sm:mb-16 md:mb-[91px]">
          <p className="font-bold mb-2">Effective Date: 08/08/2025</p>
          <p className="mb-5">
            Welcome to <span className="font-bold">Vendibly!</span> Your privacy
            matters to us.
          </p>
          <p className="">
            This Privacy Policy explains how Vendibly (&quot;Vendibly&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
            shares, and protects your information when you use our website,
            platform, and related services (collectively, the “Services”). By
            using Vendibly, you agree to the practices described below.
          </p>
        </div>
        <div className="pb-10 sm:pb-[78px] lg:pb-[123px] border-b border-b-foreground/15">
          <div className="grid grid-cols-1 md:grid-cols-[265px_1fr] gap-x-5 lg:gap-x-[84px] space-y-5 sm:space-y-10 md:space-y-14 lg:space-y-[91px]">
            {/* Information We Collect */}
            <h2 className="doc-title">Information We Collect</h2>
            <div className="doc-text space-y-2">
              <p>We collect different types of data to support our Services:</p>
              <ul className="list-inside list-[lower-alpha] space-y-2">
                <li>
                  <span className="font-bold">Personal Information</span>
                  <ul className="list-inside list-disc max-md:indent-4">
                    <li>
                      Name, email address, company name, and other contact
                      details you provide.
                    </li>
                    <li>
                      Login credentials and user profile details within your
                      team or organization.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Vendor & Marketplace Data</span>
                  <ul className="list-inside list-disc max-md:indent-4">
                    <li>
                      Vendor contact details, communications, performance
                      history, notes, and records
                    </li>
                    <li>
                      Marketplace data you authorize us to access (e.g., product
                      listings, orders, fulfillment info).
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">
                    Email Content & Communication Metadata
                  </span>
                  <ul className="list-inside list-disc max-md:indent-4">
                    <li>
                      When you connect your email (Gmail, Outlook, etc.), we
                      access:
                      <ul className="indent-10 list-inside list-decimal">
                        <li>
                          Relevant email content exchanged with vendors or
                          business contacts
                        </li>
                        <li>
                          Metadata like sender/receiver, timestamps, and
                          attachments
                        </li>
                      </ul>
                    </li>
                    <li>
                      We only access emails necessary for delivering features
                      like vendor insights, CRM tools, or communication
                      timelines.
                    </li>
                    <li>
                      We{" "}
                      <span className="font-bold">
                        do not access personal or unrelated emails.
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-bold">Uploaded Documents & Files</span>
                  <ul className="list-inside list-disc max-md:indent-4">
                    <li>
                      Any contracts, invoices, catalogs, or other files you
                      upload.
                    </li>
                    <li>These files are encrypted and stored securely.</li>
                  </ul>
                </li>

                <li>
                  <span className="font-bold">Usage & Device Data</span>
                  <ul className="list-inside list-disc max-md:indent-4">
                    <li>
                      IP address, browser type, device information, referral
                      URLs, and browsing behavior on Vendibly.ai.
                    </li>
                    <li>
                      Cookies and tracking technologies used for analytics and
                      platform optimization.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <h2 className="doc-title">How We Use Your Information</h2>
            <div className="doc-text space-y-2">
              <p>
                We only use your information for purposes directly related to
                your experience with Vendibly:
              </p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>To provide, personalize, and improve our Services</li>
                <li>
                  To power vendor discovery, tracking, analytics, and CRM
                  features
                </li>
                <li>
                  To analyze communication patterns and surface insights via AI
                </li>
                <li>To respond to inquiries and support requests</li>
                <li>To administer your account and keep the platform secure</li>
                <li>To monitor usage, detect anomalies, and prevent fraud</li>
              </ul>
            </div>

            {/* What We Don't Do */}
            <h2 className="doc-title">What We Don’t Do</h2>
            <div className="doc-text space-y-2">
              <p>Let’s be very clear:</p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>
                  <span className="font-bold">We do not sell your data to</span>{" "}
                  anyone
                </li>
                <li>
                  <span className="font-bold">
                    We do not use your emails or vendor data for marketing,
                    profiling, or advertising
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    We do not read or access your personal email content.
                  </span>
                </li>
                <li>
                  We only use your data to provide the services you signed up
                  for.
                </li>
              </ul>
            </div>

            {/* AI & Automated Processing */}
            <h2 className="doc-title">AI & Automated Processing</h2>
            <div className="doc-text space-y-2">
              <p>
                Some Vendibly features use machine learning and AI models to
                organize vendor information, analyze communication trends, or
                suggest actions. This processing is:
              </p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>Transparent — you’ll always know what’s being analyzed</li>
                <li>
                  Non-binding — no decisions are made that legally or
                  financially affect users
                </li>
                <li>
                  Controlled — limited to your synced or uploaded business data
                </li>
              </ul>
            </div>

            {/* Third-Party Integrations */}
            <h2 className="doc-title">Third-Party Integrations</h2>
            <div className="doc-text space-y-2">
              <p>
                When you connect third-party services (e.g., email,
                marketplaces, or data sources), we:
              </p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>Only access data with your explicit authorization</li>
                <li>Use OAuth or secure API standards</li>
                <li>Respect the scopes and limits of access granted</li>
                <li>Allow you to revoke integration access at any time</li>
              </ul>
              <p>
                If you connect Gmail, we comply fully with the Google API
                Services User Data Policy, including the{" "}
                <span className="font-bold">Limited Use</span> requirements.
              </p>
            </div>

            {/* Data Sharing */}
            <h2 className="doc-title">Data Sharing</h2>
            <div className="doc-text space-y-2">
              <p>
                We do not share your information with advertisers or unrelated
                third parties. We may share your data only with:
              </p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>
                  <span className="font-bold">Trusted service providers</span>{" "}
                  who help us deliver features securely (e.g., cloud storage,
                  email parsing, infrastructure partners)
                </li>
                <li>
                  <span className="font-bold">
                    Third-party tools you explicitly connect to
                  </span>{" "}
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <h2 className="doc-title">Data Security</h2>
            <div className="doc-text space-y-2">
              <p>We take data security seriously and implement:</p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>Encryption at rest and in transit</li>
                <li>Secure cloud infrastructure and access controls</li>
                <li>Regular audits and monitoring</li>
              </ul>
              <p>
                However, no method is 100% secure. You acknowledge the inherent
                risks of digital transmission.
              </p>
            </div>

            {/* Data Retention & Ownership */}
            <h2 className="doc-title">Data Retention & Ownership</h2>
            <div className="doc-text space-y-2">
              <ul className="list-inside list-disc max-md:indent-4">
                <li>
                  You <span className="font-bold">own all data</span> you upload
                  or sync to Vendibly
                </li>
                <li>
                  You can request a copy of your data or ask us to delete it by
                  contacting privacy@vendibly.ai.
                </li>
                <li>
                  We retain data only as long as necessary to provide services
                  or comply with legal requirements.
                </li>
              </ul>
            </div>

            {/* Team Collaboration & Access */}
            <h2 className="doc-title">Team Collaboration & Access</h2>
            <div className="doc-text space-y-2">
              <p>If you use Vendibly in a team or organization:</p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>
                  Data may be shared across team members depending on user roles
                  and permissions.
                </li>
                <li>
                  You are responsible for managing access controls within your
                  workspace.
                </li>
              </ul>
            </div>

            {/* Your Privacy Rights */}
            <h2 className="doc-title">Your Privacy Rights</h2>
            <div className="doc-text space-y-2">
              <p>Depending on your location, you may have rights to:</p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>Access, correct, or delete your data</li>
                <li>Object to processing or request data portability</li>
                <li>File a complaint with a data protection authority</li>
              </ul>
              <p>
                To exercise any of these rights, email us at
                privacy@vendibly.ai.
              </p>
            </div>

            {/* Cookies & Tracking */}
            <h2 className="doc-title">Cookies & Tracking</h2>
            <div className="doc-text space-y-2">
              <p>Vendibly uses cookies and similar technologies to:</p>
              <ul className="list-inside list-disc max-md:indent-4">
                <li>Keep you logged in</li>
                <li>Remember preferences</li>
                <li>Analyze usage patterns</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>
            </div>

            {/* Changes to This Policy */}
            <h2 className="doc-title">Changes to This Policy</h2>
            <div className="doc-text space-y-2">
              <p>
                We may update this Privacy Policy from time to time. When we do,
                we’ll update the &ldquo;Effective Date&ldquo; and notify users
                of significant changes.
              </p>
            </div>

            {/* Contact Us */}
            <h2 className="doc-title">Contact Us</h2>
            <div className="doc-text space-y-2">
              <p>
                Questions, concerns, or requests? <br />
                Reach us anytime at:
                <br /> <br />
                <span className="font-bold">Email:</span> privacy@vendibly.ai
                <br />
                <span className="font-bold">Website:</span>{" "}
                <a
                  href="https://www.vendibly.ai"
                  target="_blank"
                  className="hover:underline"
                >
                  https://www.vendibly.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

// import Image from "next/image";

// const contents = [
//   {
//     title: "Privacy Policy Overview",
//     description:
//       "We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website.",
//   },
//   {
//     title: "Information We Collect",
//     description:
//       "We may collect personal information such as your name, email address, and any other details you provide when you contact us or use our services. We also collect non-personal information through cookies and analytics tools to improve your experience.",
//   },
//   {
//     title: "How We Use Your Information",
//     description:
//       "Your information is used to provide and improve our services, respond to your inquiries, and communicate important updates. We do not sell or share your personal information with third parties except as required by law.",
//   },
//   {
//     title: "Data Security",
//     description:
//       "We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.",
//   },
//   {
//     title: "Contact Us",
//     description:
//       "If you have any questions about our Privacy Policy, please contact us through the information provided on our website.",
//   },
// ];

// const PrivacyPolicy = () => {
//   return (
//     <section className="relative py-10 sm:py-20 2xl:py-36 !pb-0 lg:pb-1.75">
//       <div className="absolute left-0 top-0 w-full h-fit isolate z-[-1] max-lg:hidden">
//         <Image
//           src={"/imgs/Hero.PNG"}
//           alt={"top-hero-bg"}
//           width={1920}
//           height={900}
//           className={"img"}
//           quality={100}
//           priority
//         />
//       </div>
//       <div className="wrapper mt-[88px] sm:mt-[120px] lg:mt-[200px] xl:mt-[300px]">
//         <h1 className="title mb-10 sm:mb-16 md:mb-[91px]">Privacy Policy</h1>
//         <div className="space-y-10 md:space-y-14 lg:space-y-[91px] pb-10 sm:pb-[78px] lg:pb-[123px] border-b border-b-foreground/15">
//           {contents.map((item, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-1 md:grid-cols-[265px_1fr] gap-5 lg:gap-[84px]"
//             >
//               <h2 className="text-lg/[23px] md:text-xl/[26px] lg:text-2xl/[31px] font-semibold font-outfit">
//                 {item.title}
//               </h2>
//               <p className="text-xs/[18px] sm:text-sm/[22px] lg:text-base/[27px] font-inter text-foreground-copy whitespace-pre-wrap">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PrivacyPolicy;
