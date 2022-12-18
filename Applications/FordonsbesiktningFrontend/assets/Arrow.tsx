const Arrow = ({ spin }: { spin: boolean }) => (
  <svg
    width="18"
    height="9"
    viewBox="0 0 18 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={
      spin
        ? { transform: "rotate(-180deg)", transition: "200ms ease-in-out" }
        : { transform: "rotate(0deg)", transition: "200ms ease-in-out" }
    }
  >
    <path
      d="M16.92 0.950012L10.4 7.47001C9.62996 8.24001 8.36996 8.24001 7.59996 7.47001L1.07996 0.950012"
      stroke="white"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Arrow;
