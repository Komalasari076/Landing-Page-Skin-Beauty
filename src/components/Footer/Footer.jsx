import Copyright from "./Copyright";
import NewsLatter from "./NewsLatter";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  return (
    <div className="h-full w-full bg-gradient-to-r from-[#71989C] via-[#97B6C0] to-[#B1C4D1]">
      <div className="max-w-9/10 mx-auto my-10 lg:px-14 lg:py-14 pt-14 pb-4 flex flex-col lg:flex-row justify-between lg:gap-20 gap-14">
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
