// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


// STEP -1 -------------------------------------------------------------------------
contract Dappazon {

// STEP -2 ------------------------------------------------------------------------
        address public owner;

        constructor(){
            owner = msg.sender; // msg.sender address inside constructer is of deployer, and 1st address of ethers.getSigners() is always deployer
            // bydefault. 
        }
}
