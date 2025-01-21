import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import Sofa from "../sofa/page";
import SofaSet from "../sofa2/page";
import Our_blog from "../blog/page";
import InstagramSection from "../Instagram/page";



export default function Home() {
  return (
    <div>
      <div>
        <Sofa/>
      </div>
     
      <Container className="py-10">
        <HomeBanner />
        <ProductGrid />
      </Container>
      <div>
        <SofaSet/>
      </div>
      <div>
        <Our_blog/>
      </div>
      <div>
        <InstagramSection/>
      </div>
      
    </div>
  );
}
