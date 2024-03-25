import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white uppercase" : "text-neutral-950 uppercase"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="U.S.A" invert={invert}>
          Axa Equitable Center
          <br />
          Manhattan, New York
        </Office>
      </li>
      <li>
        <Office name="India" invert={invert}>
          Bagmane World Technology Centre
          <br />
          Bengaluru, Karnataka
        </Office>
      </li>
    </ul>
  );
};

export default Offices;
