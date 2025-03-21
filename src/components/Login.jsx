import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

const Login = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [metamaskCode, setMetamaskCode] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [ethBalance, setEthBalance] = useState("");
  const [message, setMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  const onLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: userID, password, metamaskcode: metamaskCode }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage("Please accept MetaMask Info.");
        setUserID("");
        setPassword("");
        setMetamaskCode("");

        const provider = await detectEthereumProvider();
        if (provider) {
          const web3 = new Web3(provider);
          const accounts = await provider.request({ method: "eth_requestAccounts" });
          const selectedAccount = accounts[0];

          if (!selectedAccount) {
            setMessage("MetaMask connection rejected. Login revoked!");
            return;
          }

          if (selectedAccount.toLowerCase() === metamaskCode.toLowerCase()) {
            setMessage("Logged in successfully");
            const balance = await web3.eth.getBalance(selectedAccount);

            setWalletAddress(selectedAccount);
            setEthBalance(web3.utils.fromWei(balance, "ether"));
            setIsConnected(true);

            setTimeout(() => {
              navigate("/dashboard"); // Redirect to Dashboard after login
            }, 2000);
          } else {
            setMessage("The entered MetaMask ID does not match the connected wallet.");
          }
        } else {
          setMessage("MetaMask provider not detected. Login revoked!!");
        }
      } else {
        setMessage(data.Msg || "Login failed. Please check your credentials!!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Login failed. Please try again.");
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
    setWalletAddress("");
    setEthBalance("");
    setMessage("Logged out successfully");
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url("https://builtin.com/sites/www.builtin.com/files/2024-10/Blockchain%20Technology%20from%20Builtin.jpg")`,
        }}
      >
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Login</h2>
          </div>

          {message && <p className="m-4 text-center text-green-600 font-semibold">{message}</p>}

          {!isConnected ? (
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">User ID</label>
                <input
                  type="text"
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter user ID"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input
                  type="password"
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Metamask Wallet Address</label>
                <input
                  type="text"
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter MetaMask Wallet Address"
                  value={metamaskCode}
                  onChange={(e) => setMetamaskCode(e.target.value)}
                  required
                />
              </div>
              <button
                type="button"
                onClick={onLogin}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login Securely
              </button>
            </form>
          ) : (
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-900 text-center">Connected to MetaMask</h2>
              {/* <p className="text-lg mb-2 text-gray-700">
                <span className="font-semibold">Wallet:</span> {walletAddress}
              </p> */}
              {/* <p className="text-lg mb-4 text-gray-700">
                <span className="font-semibold">Balance:</span> {ethBalance} ETH
              </p> */}

              {/* <button
                onClick={onDisconnect}
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Disconnect
              </button> */}
            </div>
          )}

          <p className="text-center text-sm text-gray-600 mt-3">
            New user? <Link to="/signup" className="text-blue-600 font-semibold">Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
