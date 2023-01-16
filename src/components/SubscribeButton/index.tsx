import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

/* Locais seguros para operaçoes que precisam de seguraça

getServerSideProps (SSR)
getStaticProps (SSG)
API ROUTES
*/

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubscribe = async () => {
    if (!session) {
      signIn("github");
      return;
    }

    /* 
    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data;

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })

    } catch (err) {
      alert(err.message)
    }
  }
*/
    return (
      <button
        onClick={() => handleSubscribe}
        type="button"
        className={styles.subscribeButton}
      >
        Subscribe now
      </button>
    );
  };
}
