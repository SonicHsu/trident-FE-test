export default function NavButton({label, setSelectedLabel, selected}) {

    const handleSelectedButton =() => {
        setSelectedLabel(label)
        console.log(label)
    }

  return (
    <li className="h-[40px] text-center flex justify-center items-center">
      <button className={`h-[24px] w-[96px] cursor-pointer text-base font-normal hover:font-bold  ${selected ? "font-bold text-[#AA6666] border-b-2" : "font-normal text-black" }`} onClick={handleSelectedButton}>
        {label}
      </button>
    </li>
  );
}
