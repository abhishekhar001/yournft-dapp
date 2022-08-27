import Link from "next/link"

export default function CollectionItem({name,short_name,status,contract,chain_id}) {
    
  return (
    <div className="" style={{border:"2px solid white", padding:"4px", textAlign:"center"}}>
            <p>name - {name} {" "} ({short_name})</p>
            {/* <p>Status - {status}</p> */}
            <p>chain address{chain_id}</p>

            {contract?
            <>
            <p>Contract address - {contract}</p>
            <Link href={`/mint/${contract}`}>
            <button>
                Mint NFT
            </button>
            </Link>
            </>
                :
                <button>
                    Not deployed yet (Pending)
                </button>
            }
          </div>
  )
}
