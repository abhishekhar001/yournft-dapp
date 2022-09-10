import Link from "next/link"
import styles from '../../styles/Home.module.css'


export default function CollectionItem({ name, short_name, contract, status, chain_id, transaction_url,transaction_pixel }) {

  const getAttrs = (iframeTag) => {
    var doc = document.createElement('div');
    doc.innerHTML = iframeTag;
  
    const iframe = doc.getElementsByTagName('iframe')[0];
    return [].slice
      .call(iframe.attributes)
      .reduce((attrs, element) => {
        attrs[element.name] = element.value;
        return attrs;
      }, {});
  }

  return (
    <div className={styles.boxShadow_1} style={{ border: "2px solid white", marginBottom: "1rem", padding: "1rem 6rem", textAlign: "center", borderRadius: "1rem" }}>
      <p>name - {name} {" "} ({short_name})</p>
      {/* <p>Status - {status}</p> */}
      <p>chain id: {chain_id}</p>

      {contract ?
        <>
          <p>Contract address - {contract}</p>
          <Link href={`/mint/${contract}`}>
            <button className={styles.btn_sub}>
              Mint NFT
            </button>
          </Link>
        </>
        :
        <>
          <p>
            Transaction is not verified yet
          </p>

          <Link href={transaction_url}>
            <a target="_blank" className={styles.btn_sub}>
              Verify now
            </a>
          </Link>
          <h6>after verifying please wait for sometime and refresh the page</h6>
        </>

      }
    </div>
  )
}
