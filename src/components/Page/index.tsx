import { ReactNode } from 'react';
import { Container } from './styles';
import { DefaultOverlayContent } from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';
import { UniqueOverlay } from '../UniqueOverlay';

interface PageProps {
  children: ReactNode;
}

export const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model 3",
            "Model Y",
            "Model S",
            "Model X",
            "Solar Panels",
            "Solar Roof",
            "Accessories",
          ].map(pageName => (
          <ModelSection
          key={pageName}
            className="backgroundimage"
            modelName={pageName}
            overlayNode={
              <DefaultOverlayContent 
              label={pageName}
              description="Leasing starting at $349/mo"
              />
            }
        />
        ))}
          
        </div>
        
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
}
