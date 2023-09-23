import { ethers } from 'ethers'
import { useEffect, useState } from 'react';

const Navigation = ({ account, setAccount, dappazon, provider }) => {

    const [owner, setOwner] = useState(null)

    const fetchOwner = async () => {
        if(dappazon){
            const owner = await dappazon.owner()
            setOwner(owner)
        }
    }

    useEffect(() => {
        fetchOwner()   
    }, [dappazon, account])

    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
        
    }

    const withDrawHandler = async () => {
        // Withdraw
        let transaction = await dappazon.connect(await dappazon.owner()).withdraw()
        await transaction.wait()
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1>Dappazon</h1>
            </div>

            <input
                type="text"
                className="nav__search"
            />

            {account ? (
                <>
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                    {console.log('AYA', )}
                </button>

                {account && owner && account === owner ? (<button
                    type="button"
                    className='nav__connect'
                    onClick={withDrawHandler}
                >
                    Withdrwa Funds
                </button>):("")
                }

                </>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}

            <ul className='nav__links'>
                <li><a href="#Clothing & Jewelry">Clothing & Jewelry</a></li>
                <li><a href="#Electronics & Gadgets">Electronics & Gadgets</a></li>
                <li><a href="#Toys & Gaming">Toys & Gaming</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;