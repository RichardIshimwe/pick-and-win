'use client';
// import { useRouter } from "next/navigation";
// import Header from "@/components/header";
// import { useState, useEffect } from "react";
// import { fetchApiData } from "@/utils/api";
// import axios from "axios";
// import Image from "next/image"
// import Link from "next/link";

// const Index: React.FC = () => {

// const router = useRouter();
// const [data, setData] = useState([]);
// const [country, setCountry] = useState(0);
// const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1280px-Flag_of_Bangladesh.svg.png";

// useEffect(() => {
//   const fetchData = async () => {
//     axios.get("https://api.sampleapis.com/countries/countries")
//     .then((response) => {
//       localStorage.setItem("countries", JSON.stringify(response.data));
      
//       setData(JSON.parse(localStorage.getItem("countries")));
//     })
//     .then(error => console.log("error:", error))
//   };
//   fetchData();
// }, []);
// if(data.length > 0) console.log("fetched countries:", data[0].media.flag);

// const handleClick = () => {
// router.push("/signup")
// }



// const handleNext = () =>{
//   if(data) {
//     setCountry(Math.floor(Math.random() * ((data.length) - 0 + 1)) + 0)
//   console.log("number:", country);
//   };
// }

//   return (
//     <div className="h-screen grid grid-rows-6 gap-2">
//       <Header />
//       <div className="row-span-5 flex">
//   <div className="bg-black flex-grow" style={{ flexBasis: '30%' }}></div>
//   <div className="flex-grow" style={{ flexBasis: '70%' }}>
//   <div className="bg-green-400 w-full h-full grid" style={{ gridTemplateColumns: 'auto', gridTemplateRows: '0.3fr 1fr 0.3fr' }}>
//   <div className="bg-blue-400"></div>
//   { data.length > 0 ?(
//   <div className="bg-yellow-400 flex">
//     <div className="bg-pink-400 flex justify-center items-center" style={{ flexBasis: '60%' }}>
//       <div className="bg-green-400 relative w-full h-full" style={{width : "80%", height : "80%"}}>
//         <Image
//          src={data[country].media.flag}
//          alt="no image provided" 
//          layout="fill" 
//          objectFit="cover"
//          objectPosition="center"
//          />
//       </div>
//     </div>
//     <div className="bg-black" style={{ flexBasis: '40%' }}></div>
//   </div>
// ) : (<div>Loading...................</div>)
// }
//   <div className="bg-gray-400">
//     <button>Submit</button>
//     <button onClick={handleNext} className="bg-black text-white w-80 h-10 rounded-sm font-bold mb-3">Next</button>
//   </div>
// </div>

//   </div>
// </div>
//     </div>
//   )
// }

// export default Index

import { useRouter } from "next/navigation";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Index: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [country, setCountry] = useState(0);
  const [option, setOption] = useState<string[]>([]);
  const [index, setIndex] = useState<number[]>([]);

  const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1280px-Flag_of_Bangladesh.svg.png";

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get("https://api.sampleapis.com/countries/countries");
        const responseData = response.data;
        let newOption = [responseData[country].capital, "bujumbura", "kigali", "kampala"];
        console.log("...............", newOption);
        const copiedArray = [0,1,2,3];
        setIndex(copiedArray);
        setData(responseData);
        setOption(newOption);
    };
    
    fetchData();
  }, []);

let triger: number = 0;
  // useEffect(() => {
  //   const copiedArray = [0,1,2,3];
  //   setIndex(copiedArray);
  //   if (data.length > 0 && triger === 0) {
  //     let newOption = [data[country].capital, "bujumbura", "kigali", "kampala"];
  //     setOption(newOption);
  //   }
  // }, [data, country]); 

  const handleClick = () => {
    router.push("/signup");
  };

  let shuffleArray = (array : any[]) : any[] => {
    const result = array.slice();

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
  
    console.log("shuffled array:", result);
    return result;
  }


  const handleNext = () => {
    if (data.length > 0) {
      const randomCountry = country + 1;
      console.log("number:", randomCountry);
      let arrayToShuffle = [data[randomCountry].capital, "bujumbura", "kigali", "kampala"];
      let copiedArray = index;
      const shuffledArray = shuffleArray(copiedArray);
      console.log("original:", copiedArray);
      console.log("shuffled:", shuffledArray);
      setIndex(shuffleArray);
      // const finalShuffled = shuffleArray(arrayToShuffle);
      setOption(arrayToShuffle);
      // console.log("options:", finalShuffled);
      setCountry(randomCountry);
    }
  };

  let newOption = ["cairo", "bujumbura", "kigali", "kampala"];

  return (
    <div className="h-screen grid grid-rows-6 gap-2">
      <Header />
      <div className="row-span-5 flex">
        <div className="bg-black flex-grow" style={{ flexBasis: '30%' }}>
        </div>
        <div className="flex-grow" style={{ flexBasis: '70%' }}>
          <div className="bg-green-400 w-full h-full grid" style={{ gridTemplateColumns: 'auto', gridTemplateRows: '0.3fr 1fr 0.3fr' }}>
            <div className="bg-blue-400"></div>
            {data.length > 0 ? (
              <div className="bg-yellow-400 flex">
                <div className="bg-pink-400 flex justify-center items-center" style={{ flexBasis: '60%' }}>
                  <div className="bg-green-400 relative w-full h-full" style={{ width: "80%", height: "80%" }}>
                    <Image
                      src={data[country].media.flag}
                      alt="no image provided"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <div className="bg-black" style={{ flexBasis: '40%' }}>
                <div className="bg-green-400 w-full h-full grid" style={{ gridTemplateColumns: 'auto', gridTemplateRows: '1fr 1fr 1fr 1fr' }}>
          {option.length > 0 ? 
          (option.map(
            (item, i) => <div className="bg-green-600 flex-grow" key={item}>{option[index[i]]}</div>
          )) : (<p>loading.........</p>)}
          </div>
                </div>
              </div>
            ) : (
              <div>Loading...................</div>
            )}
            <div className="bg-gray-400">
              <button>Submit</button>
              <button onClick={handleNext} className="bg-black text-white w-80 h-10 rounded-sm font-bold mb-3">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
