import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Section4 from "../components/Section4";
import ContactForm from "../components/ContactForm";

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="features" className="main style1">
                  <Features/>
                </section>

                <section id="two" className="main style2">
                    <Benefits/>
                </section>

                <section id="four" className="main special">
                    <Section4/>
                </section>
         

                
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
