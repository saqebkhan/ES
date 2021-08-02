const MapAssignment = (saman) => saman.map (
     (item) =>
     `I am planning to do ${item.course} from ${item.institute} situated at  ${item.city} having contact number as ${item.moblieNo}`
)
console.log(
     MapAssignment([
       {
         course: "PDAC",
         institute: "PickupBiz",
         moblieNo: 9874561230,
         city: "Nanded"
       },
       {
         course: "Networking",
         institute: "Seed Infotech",
         moblieNo: 9874561555,
         city: "pune"
       },
       {
         course: "DAC ",
         institute: "C-DAC",
         moblieNo: 987456523523,
         city: "HYD"
       },
   
       {
         course: "HTML CSS",
         institute: "Naresh IT",
         moblieNo: 453636355,
         city: "Mumbai"
       },
     ])
   )

