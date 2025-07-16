import Image from "next/image";

const TermsAndPrivacy = () => {
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

            {/* Content */}
            <div className="wrapper mt-[88px] sm:mt-[120px] lg:mt-[200px] xl:mt-[300px]">
                {/* Heading */}
                <h1 className="title mb-10 sm:mb-16 md:mb-[91px]">
                    Terms and Privacy
                </h1>
                <div className="doc-text mb-10 sm:mb-16 md:mb-[91px]">
                    <p className="font-bold mb-2">Effective Date: 08/08/2025</p>
                    <p className="mb-5">
                        Welcome to <span className="font-bold">Vendibly!</span>
                    </p>
                    <p className="">
                        These Terms & Conditions (“Terms”) govern your access to
                        and use of the Vendibly platform, website, and services
                        (“Services”), provided by Vendibly (“Vendibly”, “we”,
                        “us”, or “our”). By using our Services, you agree to
                        these Terms. <br />
                        <br />
                        If you’re using Vendibly on behalf of a company, you
                        confirm you have authority to bind that company to these
                        Terms.
                    </p>
                </div>
                <div className="pb-10 sm:pb-[78px] lg:pb-[123px] border-b border-b-foreground/15">
                    <div className="grid grid-cols-1 md:grid-cols-[265px_1fr] gap-x-5 lg:gap-x-[84px] space-y-5 sm:space-y-10 md:space-y-14 lg:space-y-[91px]">
                        {/* Your Vendibly Account */}
                        <h2 className="doc-title">Your Vendibly Account</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                To access most features, you’ll need to create
                                an account. You agree to:
                            </p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li>
                                    Provide accurate and complete information
                                </li>
                                <li>Keep your login credentials secure</li>
                                <li>
                                    Be responsible for any activity under your
                                    account
                                </li>
                            </ul>
                            <p>
                                You’re responsible for managing your team’s
                                access if you&apos;re using Vendibly as part of
                                an organization.
                            </p>
                        </div>

                        {/* Use of Our Services */}
                        <h2 className="doc-title">Use of Our Services</h2>
                        <div className="doc-text space-y-2">
                            <p>Vendibly offers tools to help you:</p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li>Manage and track vendor relationships</li>
                                <li>
                                    Sync business communications (e.g., email)
                                </li>
                                <li>Gain operational insights through AI</li>
                                <li>
                                    Collaborate as a team around vendor data
                                </li>
                            </ul>
                            <p>
                                You agree to use the Services{" "}
                                <span className="font-bold">
                                    only for lawful, internal business purposes
                                </span>{" "}
                                and in accordance with these Terms.
                            </p>
                            <p>You must not:</p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li>
                                    Use Vendibly to harass, exploit, or
                                    impersonate anyone
                                </li>
                                <li>
                                    Reverse-engineer or disrupt the platform
                                </li>
                                <li>
                                    Use automated bots or scripts outside of our
                                    public APIs
                                </li>
                                <li>
                                    Access other users’ data without permission
                                </li>
                            </ul>
                        </div>

                        {/* Data Access and Privacy */}
                        <h2 className="doc-title">Data Access and Privacy</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                By using Vendibly, you grant us permission to
                                access and process the data you upload, sync, or
                                generate through the platform — including vendor
                                data, synced emails, files, and usage logs —
                                strictly for the purpose of delivering and
                                improving our Services.
                            </p>
                            <p>We don’t own your data. You do.</p>
                            <p>
                                Our use of your data is governed by our Privacy
                                Policy. In short:
                            </p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li className="font-bold">
                                    We don’t sell your data
                                </li>
                                <li className="font-bold">
                                    We don’t use it for advertising
                                </li>
                                <li className="font-bold">
                                    We only process what’s needed to deliver the
                                    product
                                </li>
                            </ul>
                        </div>

                        {/* Email & Third-Party Integrations */}
                        <h2 className="doc-title">
                            Email & Third-Party Integrations
                        </h2>
                        <div className="doc-text space-y-2">
                            <p>
                                Vendibly allows you to connect third-party tools
                                (e.g., Gmail, Outlook, Amazon, or other
                                marketplaces). When you do:
                            </p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li>
                                    You authorize us to access the scopes of
                                    data needed for platform functionality
                                </li>
                                <li>
                                    You can revoke access at any time from the
                                    source platform
                                </li>
                                <li>
                                    We only use that data for the features you
                                    choose to use
                                </li>
                            </ul>{" "}
                            <p>
                                If you connect Gmail, we comply with the Google
                                API Services User Data Policy, including its{" "}
                                <span className="font-bold">Limited Use</span>{" "}
                                requirements.
                            </p>
                        </div>

                        {/* AI Features */}
                        <h2 className="doc-title">AI Features</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                Some features may use AI to analyze
                                communications or provide insights. These tools
                                are assistive only —{" "}
                                <span className="font-bold">
                                    they do not make final decisions
                                </span>{" "}
                                and do not replace your judgment.
                            </p>
                            <p>
                                Vendibly is not liable for business outcomes
                                based on automated suggestions.
                            </p>
                        </div>

                        {/* Subscription & Payments */}
                        <h2 className="doc-title">Subscription & Payments</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                Some parts of Vendibly may require a paid
                                subscription
                            </p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li>
                                    Pricing and billing terms are described at
                                    vendibly.ai pricing section (or provided
                                    separately)
                                </li>
                                <li>
                                    By subscribing, you authorize recurring
                                    charges per the agreed plan
                                </li>
                                <li>
                                    You can cancel or change your subscription
                                    anytime — changes apply to the next billing
                                    cycle
                                </li>
                                <li>
                                    We do not issue refunds for partial months
                                    or unused features
                                </li>
                            </ul>{" "}
                        </div>

                        {/* Termination */}
                        <h2 className="doc-title">Termination</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                You may stop using Vendibly at any time.
                                Vendibly may suspend or terminate your access
                                if:
                            </p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li>You violate these Terms</li>
                                <li>You misuse or abuse the platform</li>
                                <li>Required by law or court order</li>
                            </ul>
                            <p>
                                We may also discontinue the platform entirely,
                                in which case we’ll notify users and give you a
                                chance to export your data.
                            </p>
                        </div>

                        {/* Intellectual Property */}
                        <h2 className="doc-title">Intellectual Property</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                Vendibly retains all rights to our platform,
                                including code, branding, features, and design.
                                You may not copy, resell, or rehost any part of
                                the platform without written consent.
                            </p>
                            <p>
                                You retain ownership of your data, and we claim
                                no rights to your vendor records,
                                communications, or uploaded files
                            </p>
                        </div>

                        {/* Disclaimers */}
                        <h2 className="doc-title">Disclaimers</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                The Services are provided “as is” without
                                warranty of any kind. We don’t guarantee:
                            </p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li>
                                    That the Services will be error-free,
                                    uninterrupted, or secure
                                </li>
                                <li>
                                    That insights or suggestions are always
                                    accurate or appropriate
                                </li>
                                <li>
                                    That third-party integrations will remain
                                    available forever
                                </li>
                            </ul>
                            <p>
                                Use of Vendibly is at your own risk. You’re
                                responsible for decisions made based on our
                                tools.
                            </p>
                        </div>

                        {/* Limitation of Liability */}
                        <h2 className="doc-title">Limitation of Liability</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                To the maximum extent permitted by law, Vendibly
                                is not liable for:
                            </p>
                            <ul className="list-inside list-disc max-md:indent-4">
                                <li>
                                    Any indirect, incidental, or consequential
                                    damages
                                </li>
                                <li>Loss of data, revenue, or profits</li>
                                <li>
                                    Business disruption caused by outages or
                                    bugs
                                </li>
                            </ul>
                            <p>
                                Our total liability is limited to the amount you
                                paid us in the 12 months preceding the issue.
                            </p>
                        </div>

                        {/* Changes to These Terms */}
                        <h2 className="doc-title">Changes to These Terms</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                We may update these Terms from time to time. If
                                we make material changes, we’ll notify you via
                                email or in-app. Continued use of the platform
                                means you accept the updated Terms.
                            </p>
                        </div>

                        {/* Contact Us */}
                        <h2 className="doc-title">Contact Us</h2>
                        <div className="doc-text space-y-2">
                            <p>
                                Questions, concerns, or requests? <br />
                                Reach us anytime at:
                                <br /> <br />
                                <span className="font-bold">Email:</span>{" "}
                                privacy@vendibly.ai
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

export default TermsAndPrivacy;

// import Image from "next/image";

// const contents = [
//   {
//     title: "Personal Statement",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     title: "What are cookies?",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
//   },
//   {
//     title: "Personal Statement",
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
//   {
//     title: "What information do we gather specifically?",
//     description:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
//   },
//   {
//     title: "Website Media",
//     description:
//       "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//   },
// ];

// const TermsAndPrivacy = () => {
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

//       {/* Content */}
//       <div className="wrapper mt-[88px] sm:mt-[120px] lg:mt-[200px] xl:mt-[300px]">
//         {/* Heading */}
//         <h1 className="title mb-10 sm:mb-16 md:mb-[91px]">Terms and Privacy</h1>

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

// export default TermsAndPrivacy;
