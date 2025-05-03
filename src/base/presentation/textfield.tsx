import { useState } from "react";

interface TextFieldProps {
  title: string;
  placeholder?: string;
  obscureText?: boolean;
  onChange?: (value: string) => void;
}

const TextField = ({
  title,
  placeholder = "label",
  onChange,
  obscureText = false,
}: TextFieldProps) => {
  const [value, setValue] = useState<string>("");
  const [isObscured, setIsObscured] = useState<boolean>(obscureText);

  const handleClear = () => {
    setValue("");
    if (onChange) onChange("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };

  const toggleObscureText = () => {
    setIsObscured(!isObscured);
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="mb-1 text-[12px] font-bold leading-[16px] tracking-[0.4px] text-[#2C2C2C]">
        {title}
      </label>
      {/* Input Field with Clear and Toggle Obscure Icon */}
      <div className="relative">
        <input
          type={isObscured ? "password" : "text"} // Toggle between password and text
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-3 py-2 pr-${obscureText ? "10" : "8"} border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {/* Clear Icon */}
        {value && (
          <span
            onClick={handleClear}
            className={`absolute ${
              obscureText ? "right-10" : "right-3"
            } top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600`}
          >
            ✕
          </span>
        )}
        {/* Toggle Obscure Icon */}
        {obscureText && (
          <span
            onClick={toggleObscureText}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
          >
            {isObscured ? "👁️‍🗨️" : "👁️"}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextField;