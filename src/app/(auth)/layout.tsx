const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="h-screen justify-center items-center flex flex-col">
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
