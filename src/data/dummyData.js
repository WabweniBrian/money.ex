import { FaBriefcase, FaUser, FaUsers } from "react-icons/fa";

export const activities = [
  {
    id: 1,
    name: "Saleh Ahmed",
    status: "Sending paused",
    amount_in_euros: "1,152.25",
    amount_in_pounds: "990.01",
    avatar: "/images/avatar.png",
  },
  {
    id: 2,
    name: "Jubed Ahmed",
    status: "Sending paused",
    amount_in_euros: "2,152.25",
    amount_in_pounds: "2,654.01",
    avatar: "/images/avatar-1.png",
  },
  {
    id: 3,
    name: "Saleh Ahmed",
    status: "Completed",
    amount_in_euros: "1,152.25",
    amount_in_pounds: "990.01",
    avatar: "/images/avatar-2.png",
  },
  {
    id: 4,
    name: "Saleh Ahmed",
    status: "Sending paused",
    amount_in_euros: "1,152.25",
    amount_in_pounds: "990.01",
    avatar: "/images/avatar-3.png",
  },
  {
    id: 5,
    name: "Saleh Ahmed",
    status: "Sending paused",
    amount_in_euros: "2,152.25",
    amount_in_pounds: "1,644.01",
    avatar: "/images/avatar-4.png",
  },
  {
    id: 6,
    name: "Saleh Ahmed",
    status: "Completed",
    amount_in_euros: "3,152.25",
    amount_in_pounds: "2,455.01",
    avatar: "/images/avatar-6.png",
  },
];

export const lineChartData = [
  {
    name: "Rates (USD)",
    data: [78, 64, 34, 35, 49, 68],
  },
  {
    name: "Rates (GBP)",
    data: [78, 83, 97, 58, 56, 89],
  },
  {
    name: "Rates (EUR)",
    data: [56, 64, 48, 45, 54, 78],
  },
];

export const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#7988FF",
    },
  },
  colors: ["#FF8475", "#A061F6", "#15AF93"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#A061F6",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: ["JUN", "JUL", "AUG", "SEPT", "OCT", "NOV"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
  },
  legend: {
    show: true,
  },
  grid: {
    show: false,
    column: {
      opacity: 0.3,
    },
  },
};

export const transactions = [
  {
    id: "#12560",
    recipient: {
      logo: "/images/logos/netflix.png",
      name: "netflix",
    },
    date: "June 26, 2022",
    category: "Subscription",
    amount: "-$15.00",
    status: "Completed",
  },
  {
    id: "#12561",
    recipient: {
      logo: "/images/logos/apple.png",
      name: "apple",
    },
    date: "Sept 17, 2022",
    category: "Subscription",
    amount: "-$345.00",
    status: "Pending",
  },
  {
    id: "#12562",
    recipient: {
      logo: "/images/logos/spotify.png",
      name: "spotify",
    },
    date: "June 16, 2022",
    category: "Subscription",
    amount: "-$213.00",
    status: "Completed",
  },
  {
    id: "#12563",
    recipient: {
      logo: "/images/logos/amazon.png",
      name: "amazon",
    },
    date: "Aug 17, 2022",
    category: "Payment",
    amount: "-$274.00",
    status: "Cancelled",
  },
  {
    id: "#12564",
    recipient: {
      logo: "/images/logos/money-transfer.png",
      name: "Money transfer",
    },
    date: "May 12, 2022",
    category: "Receive",
    amount: "-$256.00",
    status: "Pending",
  },
];

export const accounts = [
  {
    id: 1,
    icon: <FaUser />,
    title: "Personal",
    iconBg: "bg-secondaryOrange",
    text: "If you're paying in from your personal bank account",
    bg: "bg-secondaryOrange/20",
    border: "border border-secondaryOrange",
  },
  {
    id: 2,
    icon: <FaBriefcase />,
    title: "Business",
    iconBg: "bg-secondaryGreen",
    text: "If you're paying in from your business' bank account",
    bg: "bg-secondaryGreen/20",
    border: "border border-secondaryGreen",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "On behalf of someone",
    iconBg: "bg-primary",
    text: "Share with friends and family",
    bg: "bg-primary/20",
    border: "border border-primary",
  },
];

export const recipients = [
  {
    id: 1,
    icon: <FaUser />,
    title: "Myself",
    iconBg: "bg-secondaryOrange",
    bg: "bg-secondaryOrange/20",
    border: "border border-secondaryOrange",
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: "Someone else",
    iconBg: "bg-secondaryGreen",
    bg: "bg-secondaryGreen/20",
    border: "border border-secondaryGreen",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    title: "Business or Charity",
    iconBg: "bg-primary",
    bg: "bg-primary/20",
    border: "border border-primary",
  },
];
