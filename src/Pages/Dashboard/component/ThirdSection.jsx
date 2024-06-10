import React from 'react'
import "./ThirdSection.css"

const ThirdSection = () => {
  return (
    <div className='thirdsecContainer'>
        <div className='history'>
            <span>Transaction History</span>
            <a href="">View all</a>
            <table>
              <thead>
                <tr>
                  <th>Network</th>
                  <th>Date</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MTN</td>
                  <td>1/2/23</td>
                  <td>#100</td>
                </tr>
                <tr>
                  <td>Glo</td>
                  <td>23/12/24</td>
                  <td>#1000</td>
                </tr>
                <tr>
                  <td>Mtn</td>
                  <td>1/2/45</td>
                  <td>#1000</td>
                </tr>
              </tbody>
            </table>
        </div>
      <div className='rightsideText'>
        <p>Refer a friend TODAY and ENJOY our Amazing price of #500 and 10% on every time he or she Fund his Account.......amazing offer</p>
      </div>
    </div>
  )
}

export default ThirdSection
