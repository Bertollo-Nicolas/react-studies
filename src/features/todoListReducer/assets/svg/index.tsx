import React from "react"

type IconProps = {
    className?: string
}

export const IconPlus: React.FC<IconProps> = ({className}) => { return (<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className={"icon icon-tabler icons-tabler-outline icon-tabler-plus "+className} ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>)}

export const IconCmd: React.FC<IconProps> = ({className}) => { return (<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className={"icon icon-tabler icons-tabler-outline icon-tabler-command"+className}
    viewBox="0 0 24 24"
  >
    <path stroke="none" d="M0 0h24v24H0z"></path>
    <path d="M7 9a2 2 0 112-2v10a2 2 0 11-2-2h10a2 2 0 11-2 2V7a2 2 0 112 2H7"></path>
  </svg>)}