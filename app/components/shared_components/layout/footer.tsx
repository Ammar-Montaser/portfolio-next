import Banner from "./banner";

function Footer(props: { className?: string }) {
  //
  return (
    <footer
      className={
        props.className +
        " rtl:font-cairo font-roboto footer   flex flex-col z-20 text-center justify-center w-full "
      }
    >
      <Banner />
    </footer>
  );
}

export default Footer;
