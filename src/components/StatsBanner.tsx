import logoAttero from "../assets/logo/attero.png";
import logoCornerBank from "../assets/logo/Corner-Bank_e.jpg";
import logoEmc from "../assets/logo/emc.png";
import logoExclusiveTestservice from "../assets/logo/exclusivetestservice.png";
import logoGak from "../assets/logo/gak.png";
import logoGpr from "../assets/logo/gpr.png";
import logoImages from "../assets/logo/images.png";
import logoIrado from "../assets/logo/irado_logo_blauwopwit.jpg";
import logoIsala from "../assets/logo/isala.png";
import logoDxRgb from "../assets/logo/Logo_DX_RGB.png";
import logoBitsForBiz from "../assets/logo/Logo-BitsForBiz.png";
import logoSHO from "../assets/logo/logo-SHO.png";
import logoStipResult from "../assets/logo/Logo-StiP-Result.jpg";
import logoSyntrus from "../assets/logo/Logo-syntrus.jpg";
import logoZinl from "../assets/logo/logo-ZINL.jpg";
import logoMirada from "../assets/logo/mirada.png";
import logoMn from "../assets/logo/mn-logo-web.jpg";
import logoNetformatie from "../assets/logo/netformatie.png";
import logoNs from "../assets/logo/ns.png";
import logoPetrim from "../assets/logo/petrim.png";
import logoPromoteYourPost from "../assets/logo/PromoteYourPost-1.png";
import logoQuion from "../assets/logo/quion.png";
import logoSchermbeelding from "../assets/logo/Schermafbeelding-2022-08-02-om-11.43.35.png";
import logoTb from "../assets/logo/tb-Logo.jpg";
import logoVodafoneZiggo from "../assets/logo/vodafone-ziggo.jpg";

const logos = [
  { logo: logoAttero },
  { logo: logoCornerBank },
  { logo: logoEmc },
  { logo: logoExclusiveTestservice },
  { logo: logoGak },
  { logo: logoGpr },
  { logo: logoImages },
  { logo: logoIrado },
  { logo: logoIsala },
  { logo: logoDxRgb },
  { logo: logoBitsForBiz },
  { logo: logoSHO },
  { logo: logoStipResult },
  { logo: logoSyntrus },
  { logo: logoZinl },
  { logo: logoMirada },
  { logo: logoMn },
  { logo: logoNetformatie },
  { logo: logoNs },
  { logo: logoPetrim },
  { logo: logoPromoteYourPost },
  { logo: logoQuion },
  { logo: logoSchermbeelding },
  { logo: logoTb },
  { logo: logoVodafoneZiggo },
];

const StatsBanner = () => {
  return (
    <section className="py-12 gradient-hero overflow-hidden">
      <div className="relative w-full">
        {/* Gradient overlays matching hero section */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[hsl(var(--primary))] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[hsl(var(--primary))] to-transparent z-10" />

        {/* Scroll Container */}
        <div className="flex gap-6 animate-scroll whitespace-nowrap will-change-transform">
          {[...logos, ...logos, ...logos, ...logos, ...logos].map((item, index) => (
            <div
              key={index}
              className="bg-card/90 backdrop-blur-sm flex justify-center items-center rounded-xl shadow-soft border border-primary/20 p-4 min-w-[160px]"
            >
              <img src={item.logo} alt="Client logo" className="h-10 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
