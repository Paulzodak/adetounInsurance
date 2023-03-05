import * as React from "react";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const navItems = [
    {
      name: "Shop",
    },
    {
      name: "Offers",
    },
    {
      name: "Our story",
    },
    {
      name: "Blog",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-[auto_auto_auto_auto_]">
        {navItems.map((item: any) => (
          <div>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
