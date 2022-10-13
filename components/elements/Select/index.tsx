import React  from 'react';

interface ISelect extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: option[];
}

type option = {
  title: string;
  value: string | number;
};

function Select({ options, placeholder = 'Select...', className, ...props }: ISelect) {
  return (
    <select
      {...props}
      className={`min-w-[160px] bg-[length:16px_13px] bg-right bg-clip-padding bg-no-repeat appearance-none h-10 rounded-[5px] block w-full py-2 px-3 border border-gray-300 bg-gray-50 focus:bg-white ${className}`}
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22%3e%3cpath fill=%22none%22 stroke=%22%23343a40%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M2 5l6 6 6-6%22/%3e%3c/svg%3e')"
      }}
    >
      <option value=''>{placeholder}</option>
      {options.map(({ title, value }) => (
        <option key={value} value={value}>
          {title}
        </option>
      ))}
    </select>
  );
}

export default Select;
