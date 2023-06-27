import { useState, useEffect } from "react"
import { Platform } from 'react-native'
import Purchases, { 
	CustomerInfo,
	PurchasesOffering
} from "react-native-purchases"

const APIKeys: any = {
	apple: "",
	google: "",
	stripe: process.env.STRIPE_PUBLIC_API_KEY
}

const typesOfMembership: any = {
	monthly: process.env.STRIPE_PUBLIC_SUBS_MONTLY,
	yearly: process.env.STRIPE_PUBLIC_SUBS_YEARLY
}

function useRevenueCat() {
	const [currentOffering, setCurrentOffering] = useState<PurchasesOffering | null>(null)

	const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null)

	const isProMember = 
	customerInfo?.activeSubscriptions.includes(typesOfMembership.monthly) || 
	customerInfo?.activeSubscriptions.includes(typesOfMembership.yearly)

	useEffect(() => {
		const fetchData = async () => {
			await Purchases.setDebugLogsEnabled(true)

			if (Platform.OS == "android") {
				await Purchases.configure({apiKey: APIKeys.stripe})
			}

			const offerings = await Purchases.getOfferings()
			const customerInfo = await Purchases.getCustomerInfo()

			setCurrentOffering(offerings.current)
			setCustomerInfo(customerInfo)
		}

		fetchData().catch(console.error)
	}, [])

	useEffect(() => {
		const customerInfoUpdated = async (purchaserInfo: CustomerInfo) => { 
			setCustomerInfo(purchaserInfo)
		}

		Purchases.addCustomerInfoUpdateListener(customerInfoUpdated)
	}, [])
	
	return { currentOffering, customerInfo, isProMember }
}

export default useRevenueCat