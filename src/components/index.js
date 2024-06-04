// I STOP USING THE INDEX TRICK WITH THE COMPONENTS

// ok first in the dashbaordpage we will read the imported fils one of them is the dashboardMObile file.
// in the dashboardmobile we will read the import of the header
// we will read the index.js
// but in the index.js will will find a file that try to import the default export of dashboardmobile and if you remember
// we arrive here before compelte reading the dashboard mobile which mean that is before compelete reading the export part of
// it.

// so I will stop using the index.js trick it is true that it makes the code clearner but because in the index.js you will
// import all the component wich mean more work and not only that it also means that sometime you are in a page P that will import
// a component B (so it will go to the index where all the components imported) and when reading the component B you may need to
// to import components C but when you will import the component C you will go to index.js file where you will found the import of
// component B that still didn't get execute and didn't arrive to the part where it will export itself and this will cause weird
// error.
