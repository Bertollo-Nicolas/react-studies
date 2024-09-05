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
    className={"icon icon-tabler icons-tabler-outline icon-tabler-command "+className}
    viewBox="0 0 24 24"
  >
    <path stroke="none" d="M0 0h24v24H0z"></path>
    <path d="M7 9a2 2 0 112-2v10a2 2 0 11-2-2h10a2 2 0 11-2 2V7a2 2 0 112 2H7"></path>
  </svg>)}

export const IconColorPicker: React.FC<IconProps> = ({className}) => { return (<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  className={"icon icon-tabler icons-tabler-outline icon-tabler-color-picker "+className}
  viewBox="0 0 24 24"
>
  <path stroke="none" d="M0 0h24v24H0z"></path>
  <path d="M11 7l6 6M4 16L15.7 4.3a1 1 0 011.4 0l2.6 2.6a1 1 0 010 1.4L8 20H4v-4z"></path>
</svg>)}
export const IconSend2: React.FC<IconProps> = ({className}) => { return (<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  className={"icon icon-tabler icons-tabler-outline icon-tabler-send-2 "+className}
  viewBox="0 0 24 24"
>
  <path stroke="none" d="M0 0h24v24H0z"></path>
  <path d="M4.698 4.034L21 12 4.698 19.966a.503.503 0 01-.546-.124.555.555 0 01-.12-.568L6.5 12 4.032 4.726a.555.555 0 01.12-.568.503.503 0 01.546-.124zM6.5 12H21"></path>
</svg>)}