import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Web3 from "web3";

const Dashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { userID, metamaskCode } = state || {};
  const [transactions, setTransactions] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const [logoutMessage, setLogoutMessage] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (window.ethereum) {
        try {
          const provider = window.ethereum;
          const web3 = new Web3(provider);
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);

            const latestBlock = await web3.eth.getBlockNumber();
            let recentTxns = [];

            for (let i = latestBlock; i > latestBlock - 10; i--) {
              const block = await web3.eth.getBlock(i, true);
              if (block && block.transactions) {
                const filteredTxns = block.transactions.filter(
                  (txn) => txn.from === accounts[0] || txn.to === accounts[0]
                );
                recentTxns.push(...filteredTxns);
              }
            }
            setTransactions(recentTxns);
          }
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      }
    };

    fetchTransactions();
  }, []);

  const handleLogout = async () => {
    try {
      setWalletAddress("");
      setTransactions([]);
  
      if (window.ethereum) {
        window.ethereum.removeAllListeners();
        alert("Please disconnect your MetaMask account manually.");
  
        // Show logout success message
        setLogoutMessage(true);
  
        setTimeout(() => {
          setLogoutMessage(false);
          navigate("/login");
        }, 3000); // 3-second delay before navigating
      } else {
        setLogoutMessage(true);
        setTimeout(() => {
          setLogoutMessage(false);
          navigate("/login");
        }, 3000);
      }
    } catch (error) {
      console.error("Error during logout:", error);
      navigate("/login");
    }
  };
  

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-900 text-white"
      style={{
        backgroundImage: "url('https://builtin.com/sites/www.builtin.com/files/2024-10/Blockchain%20Technology%20from%20Builtin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
          <span className="text-blue-600">AuthX</span>
        </h2>
        <p className="text-gray-700 text-center mb-6">
          <span className="text-green-600 font-bold">Secured Authentication</span> - You Are in the{" "}
          <span className="text-blue-600 font-bold">Safest Place</span>.
        </p>

        {logoutMessage ? (
          <p className="text-center text-green-600 font-semibold">Logged out successfully. Redirecting...</p>
        ) : (
          <>
            {/* Display User Information */}
            <div className="text-center bg-gray-100 p-4 rounded-lg shadow mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Your Wallet</h3>
              <p className="text-gray-600 mt-1 break-words">
                <strong>Address:</strong> {walletAddress || "Not connected"}
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Recent Transactions
            </h3>

            <div className="space-y-3">
              {transactions.length > 0 ? (
                transactions.map((txn, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <p className="text-gray-700">
                      <strong>Txn Hash:</strong> {txn.hash}
                    </p>
                    <p className="text-gray-700">
                      <strong>From:</strong> {txn.from}
                    </p>
                    <p className="text-gray-700">
                      <strong>To:</strong> {txn.to}
                    </p>
                    <p className="text-gray-700">
                      <strong>Value:</strong> {Web3.utils.fromWei(txn.value, "ether")} ETH
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">No recent transactions found.</p>
              )}
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full bg-red-600 text-white py-3 mt-6 rounded-lg hover:bg-red-700 transition duration-300 shadow-lg"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
