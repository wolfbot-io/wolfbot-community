import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — WolfBot Community',
  description:
    'What WolfBot Community stores on your computer, which services it connects to, and what the community.wolfbot.io website collects. Self-hosted: your keys and trading data stay with you.',
  alternates: { canonical: 'https://community.wolfbot.io/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 prose-content">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated: 2026-11-19</strong> · Applies to the WolfBot Community software (Windows and Linux) and
        the community.wolfbot.io website, published by WolfBot.io (&quot;we&quot;, &quot;us&quot;).
      </p>

      <h2>In short</h2>
      <p>
        WolfBot Community is self-hosted: it runs on your own computer. Your exchange API keys, balances, positions and
        trading history are stored on that computer. We do not receive them, we cannot see them, and we do not sell any
        data. The sections below list the few places where the software or this website does connect to the internet.
      </p>

      <h2>What stays on your computer</h2>
      <ul>
        <li>Exchange and broker API keys (stored encrypted in a local vault), MT5 account details and your settings.</li>
        <li>Trading history, positions, strategies, bots, logs and AI Analyst reports.</li>
        <li>Telegram bot token and chat ID if you set up Telegram notifications.</li>
        <li>API keys for any AI provider you choose to connect.</li>
        <li>Live Translate audio is processed on your computer; saved transcripts stay in the local WolfBot data folder.</li>
        <li>Setup and diagnostic logs (on Windows: <code>C:\ProgramData\WolfBot\wsl\install.log</code>). They are never uploaded
          automatically; they are shared only if you choose to send them to support.</li>
      </ul>

      <h2>Connections the software makes</h2>
      <ul>
        <li>
          <strong>Your exchanges and brokers.</strong> The software calls the official API of each exchange or broker you
          connect, directly from your computer, using the keys you provide. We recommend trade-only keys with no withdrawal
          permission (<Link href="/docs/trade-only-api-keys-explained">why this matters</Link>).
        </li>
        <li>
          <strong>Telegram</strong> (optional). Notifications are sent from your computer to your own Telegram bot and chat
          through Telegram&apos;s API.
        </li>
        <li>
          <strong>Updates and downloads.</strong> The software checks GitHub for new releases and pulls its container
          images from GitHub Container Registry (ghcr.io). The Windows setup also downloads Docker Engine and Ollama (used
          by the optional translation feature) from their official sources. These providers can see your IP address and
          standard request information, as with any download.
        </li>
        <li>
          <strong>TradingView alert relay.</strong> The software can receive TradingView alerts through a relay hosted at
          community.wolfbot.io. For this it registers a random install ID and secret (not linked to your name or email),
          and asks the relay for alerts you have directed to it. Alert contents pass through the relay server until your
          computer collects them. The relay does not receive your exchange keys, balances, positions or trade history.
        </li>
        <li>
          <strong>AI features</strong> (optional). By default the AI Analyst uses a local model on your own computer and
          sends nothing off-device. If you connect a cloud AI provider with your own key, the summaries you ask it to
          analyze are sent to that provider under its terms and privacy policy.
        </li>
      </ul>

      <h2>This website (community.wolfbot.io)</h2>
      <ul>
        <li>We use Cloudflare Web Analytics (no cookies) and Google Analytics 4 to count visits and see which pages help.
          Google Analytics may set cookies or similar identifiers. You can block them with your browser settings or a content blocker.</li>
        <li>The site stores your language choice in your browser so you do not have to pick it again.</li>
        <li>Download links point to GitHub, which has its own privacy policy.</li>
      </ul>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell or rent personal data, and we do not show advertising inside the software.</li>
        <li>We do not hold your funds or ask for withdrawal permission.</li>
        <li>We do not collect your exchange credentials or trading data on our servers.</li>
      </ul>

      <h2>Your choices and control</h2>
      <ul>
        <li>Revoke any API key at the exchange at any time; WolfBot stops working with that key immediately.</li>
        <li>Remove a connected account inside WolfBot, or uninstall WolfBot. Uninstalling keeps your data folder by default so
          a reinstall can continue; delete that folder (or choose the delete-data option when offered) to remove everything.</li>
        <li>Questions or requests about data that reaches us (for example the relay install ID, or email you sent to support):
          write to <a href="mailto:community@wolfbot.io">community@wolfbot.io</a>.</li>
      </ul>

      <h2>Children</h2>
      <p>
        WolfBot Community is trading software for adults and is not directed to children under 18. We do not knowingly
        collect personal information from children.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If the software or website starts handling data differently, we update this page and the date above before the
        change takes effect.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy and support: <a href="mailto:community@wolfbot.io">community@wolfbot.io</a>. Security vulnerabilities:{' '}
        <a href="mailto:security@wolfbot.io">security@wolfbot.io</a>. See also{' '}
        <Link href="/security">Security</Link> and <Link href="/support">Support</Link>.
      </p>
    </div>
  )
}
