const AuthLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="h-full flex items-center justify-center bg-black/90">
      <div>
        {children}
      </div>
    </div>
   );
}
 
export default AuthLayout;