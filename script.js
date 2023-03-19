document.addEventListener('DOMContentLoaded', function() {
  const emissionsForm = document.getElementById('emissions-form');
  emissionsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Scope 1 calculations
    const naturalGas = parseFloat(document.getElementById('natural-gas').value) || 0;
    const diesel = parseFloat(document.getElementById('diesel').value) || 0;
    const propane = parseFloat(document.getElementById('propane').value) || 0;
    
    const scope1Emissions = naturalGas * 0.2 + diesel * 2.7 + propane * 1.5;
    document.getElementById('scope1-result').textContent = scope1Emissions.toFixed(1);
    
    // Scope 2 calculations
    const electricity = parseFloat(document.getElementById('electricity').value) || 0;
    const heating = parseFloat(document.getElementById('heating').value) || 0;
    const cooling = parseFloat(document.getElementById('cooling').value) || 0;
    
    const scope2Emissions = electricity * 0.5 + heating * 0.2 + cooling * 0.1;
    document.getElementById('scope2-result').textContent = scope2Emissions.toFixed(1);
    
    // Scope 3 calculations
        // Scope 3 calculations
    const cotton = parseFloat(document.getElementById('cotton').value) || 0;
    const polyester = parseFloat(document.getElementById('polyester').value) || 0;
    const viscose = parseFloat(document.getElementById('viscose').value) || 0;
    const wool = parseFloat(document.getElementById('wool').value) || 0;
    const inboundTransport = parseFloat(document.getElementById('inbound-transport').value) || 0;
    const waste = parseFloat(document.getElementById('waste').value) || 0;
    const outboundTransport = parseFloat(document.getElementById('outbound-transport').value) || 0;
    const commuting = parseFloat(document.getElementById('commuting').value) || 0;
    const businessTravel = parseFloat(document.getElementById('business-travel').value) || 0;

    const scope3Emissions = (
      cotton * 1.3 + polyester * 3.5 + viscose * 2.1 + wool * 1.7 +
      inboundTransport + waste * 0.5 + outboundTransport +
      commuting * 0.12 + businessTravel * 0.15
    );
    document.getElementById('scope3-result').textContent = scope3Emissions.toFixed(1);


 
    // Calculate total emissions
    const totalEmissions = scope1Emissions + scope2Emissions + scope3Emissions;
    document.getElementById('total-result').textContent = totalEmissions.toFixed(1);
    
    // Display results
    document.getElementById('results').style.display = 'block';
  });
});

