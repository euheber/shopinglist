function checkIcon({ width, height, color }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill={color}
        viewBox="0 0 256 256"
      >
        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
      </svg>
    </>
  );
}

export default checkIcon;
