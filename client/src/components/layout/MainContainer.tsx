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
    <main id='main-container' className={page}>
      {children}
    </main>
  )
}

export default MainContainer