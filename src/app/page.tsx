import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * All core sections use ShadCN components. Designers can restyle to match Wise UI (colours, typography, spacing).
 *
 * Sections:
 * — Total balance + action buttons (Send, Add money, Request)
 * — Currency account cards (EUR, AUD, CAD, GBP)
 * — Recent transactions list
 * — Footer (Provided by Wise Assets Europe)
 */

const CURRENCY_ACCOUNTS = [
  { code: "EUR", label: "EUR", accountId: "51568", balance: "200.00", flagSrc: "/assets/flags/europe.svg" },
  { code: "AUD", label: "AUD", accountId: "30779", balance: "100.00", flagSrc: "/assets/flags/australia.svg" },
  { code: "CAD", label: "CAD", accountId: "15376", balance: "100.00", flagSrc: "/assets/flags/canada.svg" },
  { code: "GBP", label: "GBP", accountId: "13159", balance: "100.00", flagSrc: "/assets/flags/united-kingdom.svg" },
]

const RECENT_TRANSACTIONS = [
  { id: "1", iconType: "arrow", name: "Hannah Johnson", subtitle: "Sent • 18 Apr", amount: "49 EUR", isCredit: false },
  { id: "2", iconType: "plus", name: "To EUR", subtitle: "Added • 18 Apr", amount: "+ 50 EUR", subAmount: "50.44 EUR", isCredit: true },
  { id: "3", iconType: "arrow", name: "Brandon Bolt", subtitle: "Sent • 2 Apr", amount: "110 EUR", isCredit: false },
]

export default function Home() {
  return (
    <div className="min-w-0 w-full pl-12 pr-6 pb-6 pt-14">
      <div className="mx-auto flex min-w-0 w-full max-w-[976px] flex-1 flex-col gap-8">
        {/* Total balance + actions */}
        <section className="space-y-4">
          <div className="space-y-0">
            <p className="text-sm font-medium text-muted-foreground">Total balance</p>
            <h2 className="text-3xl font-bold tracking-tight">$500.00</h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button>Send</Button>
            <Button variant="secondary">Add money</Button>
            <Button variant="secondary">Request</Button>
          </div>
        </section>

        {/* Currency account cards */}
        <section className="w-full max-w-full overflow-x-auto pb-1">
          <div className="flex w-max gap-3">
          {CURRENCY_ACCOUNTS.map((account) => (
            <Card key={account.code} className="h-[206px] w-[256px] shrink-0 justify-between gap-0 bg-card">
              <CardHeader className="flex flex-row items-center justify-start space-y-0 pb-2">
                <Image
                  src={account.flagSrc}
                  alt={`${account.label} flag`}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full"
                />
                <CardTitle className="text-base font-medium">{account.label}</CardTitle>
              </CardHeader>
              <CardContent className="mt-auto space-y-1">
                <p className="text-xs text-muted-foreground">Account - {account.accountId}</p>
                <p className="text-2xl font-bold">{account.balance}</p>
              </CardContent>
            </Card>
          ))}
          </div>
        </section>

        {/* Recent transactions */}
        <section className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Transactions</h2>
            <Link
              href="/"
              className="text-sm font-medium text-green-700 underline underline-offset-4 hover:opacity-80"
            >
              See all
            </Link>
          </div>
          <ul className="rounded-lg">
            {RECENT_TRANSACTIONS.map((tx) => (
              <li key={tx.id} className="flex items-center gap-4 py-3">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-muted">
                  {tx.isCredit ? (
                    <Image
                      src="/assets/icons/plus.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                      aria-hidden
                    />
                  ) : (
                    <Image
                      src="/assets/icons/arrow-up.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                      aria-hidden
                    />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{tx.name}</p>
                  <p className="text-sm text-muted-foreground">{tx.subtitle}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className={`font-medium ${tx.isCredit ? "text-green-700" : ""}`}>
                    {tx.amount}
                  </p>
                  {tx.isCredit && tx.subAmount && (
                    <p className="text-xs text-muted-foreground">{tx.subAmount}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-auto pt-4">
          <p className="text-xs text-muted-foreground">
            Provided by Wise Assets Europe
          </p>
        </footer>
      </div>
    </div>
  )
}
