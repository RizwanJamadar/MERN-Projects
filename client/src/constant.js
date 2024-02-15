export const menuItems = [
  {
    name: "Dashboard",
    icon: "home",
    outerLink: "/",
  },
  {
    name: "Employee",
    icon: "groups",
    outerLink: "/addEmployee",
    items: [
      {
        name: "New Employee",
        link: "/addEmployee",
      },
      {
        name: "Employee List",
        link: "/showEmployes",
      },
    ],
  },
  {
    name: "Department",
    icon: "sticky_note",
    outerLink: "/showDepartment",
    items: [
      {
        name: "Department List",
        link: "/showDepartment",
      },
    ],
  },
  {
    name: "Leave Type",
    icon: "bookmark_manager",
    outerLink: "/showLeaveList",
    items: [
      {
        name: "Add Leave",
        link: "/addLeaveList",
      },
    ],
  },
  {
    name: "Leave",
    icon: "checkbook",
    outerLink: "/allLeaves",
    items: [
      {
        name: "Approved",
        link: "/allLeaves/Approved",
      },
      {
        name: "Pending",
        link: "/allLeaves/Pending",
      },
      {
        name: "Rejected",
        link: "allLeaves/Rejected",
      },
    ],
  },
  {
    name: "Manage Admin",
    icon: "person",
    outerLink: "/manageAdmins",
  },
  {
    name: "Logout",
    icon: "logout",
  },
];

export const rows = [
  {
    id: 123546,
    name: "Rizwan Jamadar",
    img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "1 Mar",
    days: "3 days",
    status: "Leave",
    department: "IT",
  },
  {
    id: 786546,
    name: "Shawn D'silva",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "6 Mar",
    days: "2 days",
    status: "Leave",
    department: "COMS",
  },
  {
    id: 564546,
    name: "Neola Almedia",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20 Feb",
    days: "-",
    status: "Work",
    department: "IT",
  },
  {
    id: 523546,
    name: "Dhruvi Shah",
    img: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "22 Feb",
    days: "-",
    status: "Work",
    department: "EXTC",
  },
  {
    id: 123546,
    name: "Bhavik Panchal",
    img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "1 Mar",
    days: "3 days",
    status: "Leave",
    department: "EE",
  },
];

export const staffData = [
  {
    id: 123546,
    name: "Rizwan Jamadar",
    img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "Infomation Technology",
    email: "rizwanjamadar@sfit.ac.in",
    position: "HOD",
  },
  {
    id: 786546,
    name: "Shawn D'silva",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "Computer",
    email: "shawn2001@sfit.ac.in",
    position: "HOD",
  },
  {
    id: 564546,
    name: "Neola Almedia",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "Infomation Technology",
    email: "almedianeola2003@sfit.ac.in",
    position: "Professor",
  },
  {
    id: 523546,
    name: "Dhruvi Shah",
    img: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "Electrical",
    email: "dhruvishah@sfit.ac.in",
    position: "HOD",
  },
  {
    id: 123546,
    name: "Bhavik Panchal",
    img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "Electrical",
    email: "2001panchalbhavik@sfit.ac.in",
    position: "Professor",
  },
  {
    id: 546576,
    name: "Blaise D'silava",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "Computer",
    email: "blaisedsilva@sfit.ac.in",
    position: "Professor",
  },
  {
    id: 657845,
    name: "Darish Dias",
    img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "Mechanical",
    email: "diasdarish20@sfit.ac.in",
    position: "HOD",
  },
  {
    id: 123546,
    name: "MD Anas Nirban",
    img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "EXTC",
    email: "mdanasnirban@sfit.ac.in",
    position: "HOD",
  },
  {
    id: 123546,
    name: "Smith Chauhan",
    img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    department: "EXTC",
    email: "smith@sfit.ac.in",
    position: "Professor",
  },
];

export const dummyData = [
  {
    srno: 1,
    name: "John Doe",
    department: "HR",
    type: "Vacation",
    from: "2024-02-01",
    to: "2024-02-05",
    days: 5,
    action: "Edit",
    status:"Approved"
  },
  {
    srno: 2,
    name: "Jane Smith",
    department: "Marketing",
    type: "Sick Leave",
    from: "2024-02-03",
    to: "2024-02-04",
    days: 2,
    action: "Approve",
    status:"Rejected"
  },
  {
    srno: 3,
    name: "Alice Johnson",
    department: "Finance",
    type: "Work from Home",
    from: "2024-02-07",
    to: "2024-02-09",
    days: 3,
    action: "Edit",
    status:"Approved"
  },
  {
    srno: 4,
    name: "Bob Brown",
    department: "IT",
    type: "Vacation",
    from: "2024-02-10",
    to: "2024-02-14",
    days: 5,
    action: "Edit",
    status:"Pending"
  },
  {
    srno: 5,
    name: "Emily Davis",
    department: "Sales",
    type: "Training",
    from: "2024-02-15",
    to: "2024-02-16",
    days: 2,
    action: "View",
    status:"Approved"
  },
  {
    srno: 6,
    name: "Michael Wilson",
    department: "HR",
    type: "Sick Leave",
    from: "2024-02-02",
    to: "2024-02-03",
    days: 2,
    action: "Edit",
    status:"Approved"
  },
  {
    srno: 7,
    name: "Sarah Brown",
    department: "Finance",
    type: "Vacation",
    from: "2024-02-20",
    to: "2024-02-25",
    days: 6,
    action: "Approve",
    status:"Pending"
  },
  {
    srno: 8,
    name: "David Miller",
    department: "IT",
    type: "Work from Home",
    from: "2024-02-12",
    to: "2024-02-14",
    days: 3,
    action: "Edit",
    status:"Rejected"
  },
  {
    srno: 9,
    name: "Olivia White",
    department: "Marketing",
    type: "Training",
    from: "2024-02-08",
    to: "2024-02-09",
    days: 2,
    action: "View",
    status:"Approved"
  },
  {
    srno: 10,
    name: "James Anderson",
    department: "Sales",
    type: "Vacation",
    from: "2024-02-28",
    to: "2024-03-03",
    days: 4,
    action: "Approve",
    status:"Approved"
  },
  {
    srno: 11,
    name: "Emma Taylor",
    department: "HR",
    type: "Work from Home",
    from: "2024-02-10",
    to: "2024-02-11",
    days: 2,
    action: "Edit",
    status:"Approved"
  },
  {
    srno: 12,
    name: "Daniel Martinez",
    department: "IT",
    type: "Training",
    from: "2024-02-17",
    to: "2024-02-18",
    days: 2,
    action: "View",
    status:"Pending"
  },
  {
    srno: 13,
    name: "Sophia Harris",
    department: "Finance",
    type: "Sick Leave",
    from: "2024-02-05",
    to: "2024-02-06",
    days: 2,
    action: "Edit",
    status:"Pending"
  },
  {
    srno: 14,
    name: "Noah Clark",
    department: "Marketing",
    type: "Vacation",
    from: "2024-02-22",
    to: "2024-02-25",
    days: 4,
    action: "Edit",
    status:"Rejected"
  },
  {
    srno: 15,
    name: "Ava Young",
    department: "Sales",
    type: "Sick Leave",
    from: "2024-02-14",
    to: "2024-02-15",
    days: 2,
    action: "Approve",
    status:"Rejected"
  },
];
