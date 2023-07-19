'use client';

import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "./ProgressBar.module.css";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Index: React.FC = () => {
  const router = useRouter();
  if (typeof window !== 'undefined') {
    const userIn = localStorage.getItem("userIn");
  }
  const [data, setData] = useState([]);
  const [country, setCountry] = useState(0);
  const [option, setOption] = useState<string[]>([]);
  const [index, setIndex] = useState<number[]>([]);
  const [capital, setCapital] = useState<string>("");
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const [redCountry, setRedCountry] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [increment, setIncrement] = useState<number>(10);
  const [hint, setHint] = useState<string>("");

  const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1280px-Flag_of_Bangladesh.svg.png";

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== 'undefined') {
        const pointLocal = localStorage.getItem('points');
        setPoints(parseInt(pointLocal ?? '0'));
      }
        const response = await axios.get("https://api.sampleapis.com/countries/countries");
        const responseData = response.data;
        let newOption = [responseData[country].capital, "Cairo", "kigali", "kampala"];
        setCapital(responseData[country].capital);
        console.log("...............", newOption);
        const copiedArray = [0,1,2,3];
        setIndex(copiedArray);
        setData(responseData);
        setOption(newOption);
    };
    
    fetchData();
  }, []);

  let incrementProgress = () => {
    setProgress((prevProgress) => prevProgress + 10);
  }

  let shuffleArray = (array : any[]) : any[] => {
    const result = array.slice();

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
  
    console.log("shuffled array:", result);
    return result;
  }

  const checkAnswer = (answer: string) => {
    setIsTrue(true);
    if(answer == capital){
      // toast.success("correct");
      setPoints((point) => point + increment);
      setIncrement(10);
    }else{
      // toast.error("incorrect choice");
      setRedCountry(answer);
    }
  }

  if(progress == 100) {
    const pointsAsString = points.toString();
    localStorage.setItem("points", pointsAsString);
    router.push("/result");
  }

  const handleNext = () => {
    setIsTrue(false);
    setRedCountry("");
    setHint("");
    if (data.length > 0) {
      setProgress((prevProgress) => prevProgress + 12.5);
      let maximum = data.length - 1;
      let minimum = 0;
      const randomCountry = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      // const randomCountry = country + 1;
      setCapital(data[randomCountry].capital);
      let arrayToShuffle = [data[randomCountry].capital];
      const randomNumbers = [];
      for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        arrayToShuffle.push(data[randomNumber].capital);
        randomNumbers.push(randomNumber);
      }
      let copiedArray = index;
      const shuffledArray = shuffleArray(copiedArray);
      console.log("original:", copiedArray);
      console.log("shuffled:", shuffledArray);
      setIndex(shuffleArray);
      setOption(arrayToShuffle);
      setCountry(randomCountry);
    }
  };

  let newOption = ["cairo", "bujumbura", "kigali", "kampala"];

  let handleHint = () => {
   setIncrement(5);
   setHint(data[country].name);
  }

  return (
    <Layout>
    <div className="h-screen grid grid-rows-6 gap-2">
      <Header />
      <div className="row-span-6 flex">
        <div className="bg-black flex-grow" style={{ flexBasis: '30%' }}>

        </div>
        <div className="bg-gray-800 flex-grow" style={{ flexBasis: '70%' }}>
          <div className="w-full h-full grid" style={{ gridTemplateColumns: 'auto', gridTemplateRows: '0.3fr 1fr 0.3fr' }}>
            <div className="grid">
              <div className="flex justify-between items-center">
              <button 
              className="text-white border rounded-sm mr-4" style={{ width: '75px', height: '45px',margin : "10px" }}
              onClick={handleHint}
              >Hint</button>
              <p className="text-white font-extrabold text-xl">{hint}</p>
              <div className="flex items-center">
              <p className="text-white font-extrabold">{points}</p>
              <div className="relative" style={{ width: '75px', height: '45px' }}>
                <Image
               src="/images/coins12-removebg-preview (3) 1.png"
               alt="no image provided"
               layout="fill"
               objectFit="cover"
               objectPosition="center"
              />
              </div>
              </div>
              </div>
              <div className="progress-bar bg-white" style={{width : `${progress}%`, height : "100%"}}></div>
            </div>
            {data.length > 0 ? (
              <div className="flex">
                <div className="flex justify-center items-center" style={{ flexBasis: '60%' }}>
                  <div className="relative w-full h-full" style={{ width: "80%", height: "80%" }}>
                    <Image
                      src={data[country].media.flag}
                      alt="no image provided"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <div className="" style={{ flexBasis: '40%' }}>
                <div className="w-full h-full grid" style={{ gridTemplateColumns: 'auto', gridTemplateRows: '1fr 1fr 1fr 1fr' }}>
          {option.length > 0 ? 
          (option.map(
            (item, i) => <div className="flex-grow" key={item}>
              <div className={`${isTrue && capital === option[index[i]] ? "bg-green-400": redCountry === option[index[i]] && isTrue ? "bg-red-500" : "bg-yellow-500"} flex justify-center items-center`} onClick={() => checkAnswer(option[index[i]])} style={{ width: "80%", height: "70%", borderRadius: "10px"}}>{option[index[i]]}</div></div>
              // <div className={`${isTrue && capital === option[index[i]] ? "bg-green-400": capital === option[index[i]] ? "bg-red-500":"bg-yellow-500"} flex justify-center items-center`} onClick={() => checkAnswer(option[index[i]])} style={{ width: "80%", height: "70%", borderRadius: "10px"}}>{option[index[i]]}</div></div>
          )) : (<p>loading.........</p>)}
          </div>
                </div>
              </div>
            ) : (
              <div>.....Loading.........</div>
            )}
            <div className="flex justify-around pt-4">
              <Link href="/result"><button className="bg-green-800 text-white w-80 h-10 rounded-sm font-bold mb-3">Submit</button></Link> 
              <button onClick={handleNext} className="bg-black text-white w-80 h-10 rounded-sm font-bold mb-3">Next</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </Layout>
  );
};

export default Index;


