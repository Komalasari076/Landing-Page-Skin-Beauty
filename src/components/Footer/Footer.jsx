import Copyright from "./Copyright";
import NewsLatter from "./NewsLatter";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#8fafb4] via-[#a9c4cc] to-[#b7c9d4]">
      <div className="max-w-9/10 m-auto my-10 lg:px-14 py-14 flex flex-col lg:flex-row justify-between lg:gap-20 gap-10">
        <NewsLatter />

        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-20 text-white">
          <FooterLinks
            title="Customer Support"
            links={[
              "How to Order",
              "Shipping & Returns",
              "Terms & Conditions",
              "Privacy Policy",
            ]}
          />
          <FooterLinks
            title="Resources"
            links={[
              "Skincare Guide", 
              "Ingredients Glossary", 
              "Skin Quiz"]}
          />
          <FooterLinks
            title="Partnerships"
            links={[
              "Become a Reseller",
              "Affiliate Program",
              "Wholesale Inquiry",
            ]}
          />
        </div>
      </div>

      <Copyright />
    </div>
  );
}
