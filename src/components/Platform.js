import React from 'react'
import { Link } from 'react-router-dom'

const Platform = (props) => {
    let example = `class Solution:
                    def maxProfit(self, prices: list[int]) -> int:
                        maxProfits = 0
                        step = 1
                        for i in range(0, len(prices)-1, step):
                            if prices[i+1] > prices[i] :
                                maxProfits += prices[i+1] - prices[i]
                                step = 2
                            else :
                                step = 1
                        return `
    return (
        <div className='m-5'>
            <div>
                <h2>Problem Name Goes Here</h2>
                <p>The description of the problem goes here in a brief.</p>
            </div>

            <div>
                <div class="mb-3">
                    <textarea rows={12} className='form-control'>{example}</textarea>
                </div>
                <button type="submit" class="btn btn-primary"><Link style={{ color: "white" }} to={"/success"}>Submit</Link></button>
            </div>
        </div>
    )
}

export default Platform