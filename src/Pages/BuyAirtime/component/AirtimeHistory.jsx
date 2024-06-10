import React from 'react';
import useGetHistory from '../hook/useGetHistory';
import "./AirtimeHistory.css"

const AirtimeHistory = () => {
    const { history } = useGetHistory();

    return (
        <div className='history'>
            {
            history && history.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>PhoneNumber</th>
                            <th>Network</th>
                            <th>Amount</th>
                            <th>code</th>
                            {/* <th></th> */}
                        
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item) => (
                            <tr key={item.id}>
                                 <td>+{item.phone}</td>
                                 <td>{item.network}</td>
                                <td>{item.amount}</td>
                                <td>{item.code}</td>
                                
                               
                        
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No history available</p>
            )}
        </div>
    );
};

export default AirtimeHistory;