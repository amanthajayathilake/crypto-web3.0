
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from ".";
import backgroundNavbar1 from '../images/backgroundNavbar1.jpg';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
        <p className="mt-1 text-white text-sm md:w-9/12">
          {subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="cryptoHead" style={{color: "white", fontSize: "60px", fontWeight: 700}}>
          Send Crypto
          {/* <span style={{color:"#fe8c00"}}>S</span>
          <span style={{color:"white"}}>e</span>
          <span style={{color:"#fe8c00"}}>n</span>
          <span style={{color:"white"}}>d </span>

          <span style={{color:"#fe8c00"}}>C</span>
          <span style={{color:"white"}}>r</span>
          <span style={{color:"#fe8c00"}}>y</span>
          <span style={{color:"white"}}>p</span>
          <span style={{color:"#fe8c00"}}>t</span>
          <span style={{color:"white"}}>o</span></u> */}
          {/* <SiEthereum fontSize={21} color="#fff" /> */}
          </h1><br/>
          <p style={{color: "white", fontWeight: 300}} >
            Explore the crypto world. Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet. Buy and sell cryptocurrencies easily on Crypto Web 3.0. You need to install Metamask to transfer Ethereum.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#fe8c00] p-3 rounded-full cursor-pointer hover:bg-[#e57e00]"
            >
              <AiFillPlayCircle className="text-black mr-2" />
              <p className="text-black text-base font-semibold">
                Connect Wallet(MetaMask)
              </p>
            </button>
          )}

          {/* <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div> */}<br/>
          <div style={bgImg} className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          {/* <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div> */}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-gray-800/30">
            <h3 style={{color:"white", fontSize: "20px", fontWeight: 400}}>Enter Transaction Details</h3><br/>
            <div className="h-[1px] w-full bg-gray-400 my-2" /><br/>
            <Input placeholder="Wallet Address" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETHEREUM)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Image (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
            <br/>
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <br/>
            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#fe8c00] hover:bg-[#fe8c00] rounded-full cursor-pointer"
                >
                  Transfer Now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

// const etherium = {backgroundNavbar1}
const bgImg ={
    // background: `linear-gradient( rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.70)) ,url(${backgroundNavbar1})`,
    background: `linear-gradient( rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20))`,
    backgroundSize: 'cover',
    position: 'center',
    opacity:'1',
    border: '1px solid white'
}