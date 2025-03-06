import Banner from "./banner";

function Footer(props: { className?: string }) {
  //
  return (
    <footer
      className={
        props.className +
        " footer z-20 flex w-full flex-col justify-center bg-color text-center font-roboto rtl:font-cairo"
      }
    >
      <Banner />
    </footer>
  );
}

export default Footer;
