type Props = {
  page: string,
  children: React.ReactNode
}

/**------------------------------ main container
 *
 * @name MainContainer
 * @function
 * @requires prop-types
 * @param page string
 * @param children node
 * @returns main container component
 * @description contains the content for every page
 *
 * --------------- */

const MainContainer = ({ page, children }: Props) => {
  return (
    <main id='main-container' className={page} style={{
      height: '100%',
      width: '100%',
      padding: '0.5rem 1rem 1.5rem 1rem',
    }}>
      {children}
    </main>
  )
}

export default MainContainer