import Link from "next/link"

export default function NFTCard({name,short_name,data,id,status,contract,chain_id}) {
    
  return (
    <div className="" style={{border:"2px solid white", padding:"4px", textAlign:"center"}}>
            <p>name - {name} {" "} ({short_name},id - {id})</p>
            <p>Status - {status}</p>
            <p>chain address{chain_id}</p>
            <p>Contract address - {contract}</p>
            <p>data - {data}</p>
            <button>
                Transfer NFT
            </button>            
          </div>
  )
}
