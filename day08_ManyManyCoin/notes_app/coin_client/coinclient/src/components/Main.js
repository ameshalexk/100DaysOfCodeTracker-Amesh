import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio = (props) => {

    const [purchases, setPurchases] = useState([]);


    // populate purchase data
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    "https://coinback-amesh.herokuapp.com/ledgers"
                );
                const data = await response.data;
                setPurchases(data);
                // console.log(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
       

    return (

            <div className="portfoliocontainerchild2">
                <h1 > Transactions:  {console.log(purchases)}</h1>
                {Object.entries(purchases).map((coin, i) => {
                            return (
                                <div>
                                    <br/>
                                <span
                                    key={i}
                                    style={{ color: "green" }}
                                >
                                    {" "}
                                    
                                    User :{
                                        coin[1].user.email
                                        
                                    }
                                     <br/>
                                     Coin Purchased :{coin[1].purchase.coin}
                                    <br/>
                                    Coin Purchase Price :{coin[1].purchase.price}
                                    <br/>
                                    Coin Purchase Quantity : {coin[1].qty}

                                    
                                </span>
                                <br/>
                                </div>
                            );
                        })}


            </div>

    );
};

export default Portfolio;
