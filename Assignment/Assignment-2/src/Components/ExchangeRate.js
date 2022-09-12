import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Flex
  } from '@chakra-ui/react'

function ExchangeRate (props) {
    const [base, setBase] = useState([]);
	const [currencies, setCurrencies] = useState([]);
	const [identifier, setIdentifier] = useState(1);
	const [loading, setLoading] = useState(false);

	const getCurrency = async () => {
		setLoading(true)
		try {
			let response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=7853f4e1f6094bf492a3213a6ee5e381`)
			setBase(response.data.base);
			setCurrencies([
				{
					name: 'CAD',
					rate: (response.data.rates.CAD),
				},
				{
					name: 'IDR',
					rate: (response.data.rates.IDR),
				},
				{
					name: 'JPY',
					rate: (response.data.rates.JPY),
				},
				{
					name: 'CHF',
					rate: (response.data.rates.CHF),
				},
				{
					name: 'EUR',
					rate: (response.data.rates.EUR),
				},
				{
					name: 'GBP',
					rate: (response.data.rates.GBP),
				}
			])
			

			setLoading(false)
		} catch(e) {
			setLoading(true)
			console.log(e.message);
		}
	}

	useEffect(() => {
		getCurrency();
	}, [identifier])

    return (
		<Flex direction="column" justifyContent='center' textAlign='center'>
				<h1 className='text-center'>Display Currency Rates</h1>
				<div className="form-control pb-10">
					<label className="label">
						<span className="label-text">Enter amount</span>
					</label>
					<label className="input-group">
						<input type="text" className="input input-bordered" name='identifier' value={identifier} onChange={(e) => setIdentifier(e.target.value)}/>
						<span>{base}</span>
					</label>
				</div>
				{
					loading ? <div>Loading .... </div> :
					<TableContainer>
						<Table variant='striped' colorScheme='teal'>
						<TableCaption>Imperial to metric conversion factors</TableCaption>
							<Thead>
								<Tr>
									<Th>Currency</Th>
									<Th>We Buy</Th>
									<Th>Exchange Rate</Th>
									<Th>We Sell</Th>
								</Tr>
							</Thead>
							<Tbody>
								{
									currencies.map((currency, index) => {
										let currencyRate = parseFloat(currency.rate)
										let valueRate = currencyRate * parseFloat(identifier)
										let valueBuy = valueRate + 0.05 * currencyRate * parseFloat(identifier)
										let valueSell = valueRate - 0.05 * currencyRate* parseFloat(identifier)
										return (
											<tr key={index}>
												<Td>{currency.name}</Td>
												<Td>{valueBuy}</Td>
												<Td>{valueRate}</Td>
												<Td>{valueSell}</Td>
											</tr>
										)
									})
								}
							</Tbody>
						</Table>
					</TableContainer>
				}
		</Flex>
	);
}

export default ExchangeRate