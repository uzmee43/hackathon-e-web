import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import Sofa from "@/components/Sofa";
import SofaSet from "@/components/SofaSet";
import Our_blog from "@/components/About";
import InstagramSection from "@/components/Insta";




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
