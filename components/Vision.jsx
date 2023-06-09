const Vision = () => {
  return (
    <section className="app__visions">
      <div className="element">
        <div className="hexagon">
          <img src="/innovation.png" alt="innovation" />
        </div>

        <div className="info px-2 py-2 mg:py-4 lg:py-5 md:px-3 lg:px-5">
          <h3 className="h3 font-bold underline md:pb-2 lg:pb-5">Visionary</h3>
          <p className="font3">
            The Visionary has the vision, identifies opportunities, understands
            the market and has a good idea of the software product they want to
            build.
          </p>
        </div>
      </div>

      <div className="element">
        <div className="hexagon">
          <img src="/development.png" alt="dev" />
        </div>

        <div className="info text-right px-2 py-2 mg:py-4 lg:py-5 md:px-3 lg:px-5">
          <h3 className="h3 font-bold underline md:pb-2 lg:pb-5">
            Pragmatists
          </h3>
          <p className="font3">
            Pragmatists understand the vision and converts the big picture into
            working software requiremnents (i.e Epics, User stories, Features).
          </p>
        </div>
      </div>

      <div className="element">
        <div className="hexagon">
          <img src="/crowd.png" alt="crowd" />
        </div>

        <div className="info px-2 py-2 mg:py-4 lg:py-5 md:px-3 lg:px-5">
          <h3 className="h3 font-bold underline md:pb-2 lg:pb-5">Makers</h3>
          <p className="font3">
            Makers develops a plan, timelines and converts the software
            requirements into working software.
          </p>
        </div>
      </div>

      <div className="element">
        <div className="hexagon">
          <img src="/tools.png" alt="tools" />
        </div>

        <div className="info text-right px-2 py-2 mg:py-4 lg:py-5 md:px-3 lg:px-5">
          <h3 className="h3 font-bold underline md:pb-2 lg:pb-5">Tools</h3>
          <p className="font3">
            Tools for buliding working software including developer tools,
            development platform, programming languages, data bases.
          </p>
        </div>
      </div>

      <div className="element">
        <div className="hexagon">
          <img src="/synchronize.png" alt="synchronize" />
        </div>

        <div className="info px-2 py-2 mg:py-4 lg:py-5 md:px-3 lg:px-5">
          <h3 className="h3 font-bold underline md:pb-2 lg:pb-5">
            Connections
          </h3>
          <p className="font3">
            Processes to connect the boxes, the working software, and end users
            of the software.
          </p>
        </div>
      </div>

      <div className="element">
        <div className="hexagon">
          <img src="/parcel.png" alt="parcel" />
        </div>

        <div className="info px-2 py-2 mg:py-4 lg:py-5 md:px-3 lg:px-5">
          <h3 className="h3 text-right font-bold underline md:pb-2 lg:pb-5">
            Boxes
          </h3>
          <p className="font3">
            Hardware where all the magic happens including developer workstation
            and the servers where the software runs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
